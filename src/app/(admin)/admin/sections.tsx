'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { EventsDataItem, HistoryDataItem, NewsDataItem } from '@/contexts/DataContext';
import type { CmsContent } from '@/lib/cms-data';
import { addAdmin, listAdmins, listBackups, loadBackup, removeAdmin, uploadImage } from '@/lib/cms';

export const btn = {
  primary:
    'rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300',
  outline: 'rounded-md border bg-white px-4 py-2 text-sm hover:bg-gray-100 disabled:opacity-50',
  danger: 'rounded-md px-3 py-1.5 text-sm text-red-600 hover:bg-red-50',
};
const input = 'w-full rounded-md border bg-white px-3 py-2 text-sm';

export function validate(c: CmsContent): string[] {
  const out: string[] = [];
  c.events.forEach((e, i) => !e.image_link && out.push(`팝업 ${i + 1}번: 이미지가 없습니다.`));
  c.news.forEach((n, i) => {
    if (!n.newsTitle) out.push(`뉴스 ${i + 1}번: 제목이 없습니다.`);
    if (!n.date) out.push(`뉴스 ${i + 1}번: 날짜가 없습니다.`);
  });
  c.history.forEach((h, i) => {
    if (!h.Year || !h.Month) out.push(`연혁 ${i + 1}번: 연도와 월을 입력하세요.`);
    if (!h.Content) out.push(`연혁 ${i + 1}번: 국문 내용이 없습니다.`);
  });
  return out;
}

const today = () => new Date(Date.now() + 9 * 3600_000).toISOString().slice(0, 10);

export const blank = {
  events: (): EventsDataItem => ({ date: today(), is_for_modal: true, image_link: '', external_link: '', alt: '' }),
  news: (): NewsDataItem => ({ date: today(), newsSrc: '', imgSrc: '', newsTitle: '', newsInfo: '', newsContent: '' }),
  history: (): HistoryDataItem => ({
    Year: new Date().getFullYear(),
    Month: new Date().getMonth() + 1,
    Content: '',
    Content_en: '',
  }),
};

function useList<T>(rows: T[], onChange: (rows: T[]) => void) {
  return {
    set: (i: number, patch: Partial<T>) => onChange(rows.map((r, j) => (j === i ? { ...r, ...patch } : r))),
    add: (row: T) => onChange([row, ...rows]),
    remove: (i: number) => confirm('이 항목을 삭제할까요?') && onChange(rows.filter((_, j) => j !== i)),
  };
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className='block space-y-1'>
      <span className='text-sm font-medium'>{label}</span>
      {children}
      {hint && <span className='block text-xs text-gray-500'>{hint}</span>}
    </label>
  );
}

function Card({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <div className='relative space-y-3 rounded-lg border bg-white p-4'>
      {children}
      <div className='text-right'>
        <button className={btn.danger} onClick={onRemove}>
          삭제
        </button>
      </div>
    </div>
  );
}

async function uploadWithToast(file: File | undefined, folder: 'events' | 'news') {
  if (!file) return null;
  if (!file.type.startsWith('image/')) {
    toast.error('이미지 파일만 올릴 수 있습니다.');
    return null;
  }
  try {
    return await uploadImage(file, folder);
  } catch (e) {
    toast.error(`업로드 실패: ${e}`);
    return null;
  }
}

function ImageField({
  value,
  folder,
  onChange,
}: {
  value: string;
  folder: 'events' | 'news';
  onChange: (url: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);

  const upload = async (file?: File) => {
    setBusy(true);
    const url = await uploadWithToast(file, folder);
    setBusy(false);
    if (url) onChange(url);
  };

  return (
    <div className='space-y-2'>
      <span className='text-sm font-medium'>이미지</span>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          upload(e.dataTransfer.files[0]);
        }}
        className={`flex min-h-32 cursor-pointer items-center justify-center gap-4 rounded-md border-2 border-dashed p-3 ${over ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      >
        {value && <img src={value} alt='' className='max-h-40 max-w-[50%] rounded object-contain' />}
        <span className='text-sm text-gray-500'>
          {busy ? '올리는 중…' : value ? '바꾸려면 새 이미지를 끌어다 놓거나 클릭' : '이미지를 끌어다 놓거나 클릭해서 선택'}
        </span>
        <input type='file' accept='image/*' hidden onChange={(e) => upload(e.target.files?.[0])} />
      </label>
      <input
        className={`${input} text-xs text-gray-500`}
        value={value}
        placeholder='또는 이미지 주소 붙여넣기'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button className={`${btn.primary} mb-4`} onClick={onClick}>
      + {label}
    </button>
  );
}

export function EventsEditor({ rows, onChange }: { rows: EventsDataItem[]; onChange: (r: EventsDataItem[]) => void }) {
  const l = useList(rows, onChange);
  return (
    <section className='space-y-4'>
      <p className='text-sm text-gray-500'>
        &quot;홈페이지 팝업으로 띄우기&quot;를 켠 항목이 첫 화면 팝업에 나옵니다. 모든 항목은 소개 페이지의 이벤트
        목록에도 보입니다.
      </p>
      <AddButton
        label='팝업/이벤트 추가'
        onClick={() => l.add(blank.events())}
      />
      {rows.map((r, i) => (
        <Card key={i} onRemove={() => l.remove(i)}>
          <label className='flex items-center gap-2 font-medium'>
            <input type='checkbox' className='size-5 appearance-auto' checked={r.is_for_modal} onChange={(e) => l.set(i, { is_for_modal: e.target.checked })} />
            홈페이지 팝업으로 띄우기
          </label>
          <ImageField value={r.image_link} folder='events' onChange={(image_link) => l.set(i, { image_link })} />
          <div className='grid gap-3 sm:grid-cols-2'>
            <Field label='날짜'>
              <input type='date' className={input} value={r.date} onChange={(e) => l.set(i, { date: e.target.value })} />
            </Field>
            <Field label='이미지 설명' hint='화면에 보이지 않지만 검색과 접근성에 쓰입니다.'>
              <input className={input} value={r.alt} onChange={(e) => l.set(i, { alt: e.target.value })} />
            </Field>
          </div>
          <Field label='클릭 시 이동할 주소 (선택)'>
            <input
              className={input}
              value={r.external_link}
              placeholder='https://'
              onChange={(e) => l.set(i, { external_link: e.target.value })}
            />
          </Field>
        </Card>
      ))}
    </section>
  );
}

export function NewsEditor({ rows, onChange }: { rows: NewsDataItem[]; onChange: (r: NewsDataItem[]) => void }) {
  const l = useList(rows, onChange);
  return (
    <section className='space-y-4'>
      <AddButton
        label='뉴스 추가'
        onClick={() => l.add(blank.news())}
      />
      {rows.map((r, i) => (
        <Card key={i} onRemove={() => l.remove(i)}>
          <Field label='제목'>
            <input className={input} value={r.newsTitle} onChange={(e) => l.set(i, { newsTitle: e.target.value })} />
          </Field>
          <div className='grid gap-3 sm:grid-cols-2'>
            <Field label='날짜' hint='정렬 기준입니다.'>
              <input type='date' className={input} value={r.date} onChange={(e) => l.set(i, { date: e.target.value })} />
            </Field>
            <Field label='출처 표기' hint='예: 전자신문, 2026.09.22'>
              <input className={input} value={r.newsInfo} onChange={(e) => l.set(i, { newsInfo: e.target.value })} />
            </Field>
          </div>
          <Field label='기사 주소'>
            <input
              className={input}
              value={r.newsSrc}
              placeholder='https://'
              onChange={(e) => l.set(i, { newsSrc: e.target.value })}
            />
          </Field>
          <Field label='요약'>
            <textarea
              rows={3}
              className={input}
              value={r.newsContent}
              onChange={(e) => l.set(i, { newsContent: e.target.value })}
            />
          </Field>
          <ImageField value={r.imgSrc} folder='news' onChange={(imgSrc) => l.set(i, { imgSrc })} />
        </Card>
      ))}
    </section>
  );
}

export function HistoryEditor({ rows, onChange }: { rows: HistoryDataItem[]; onChange: (r: HistoryDataItem[]) => void }) {
  const l = useList(rows, onChange);
  return (
    <section className='space-y-4'>
      <p className='text-sm text-gray-500'>
        내용은 한 줄에 한 항목씩 적습니다. 같은 연도와 월의 항목은 사이트에서 하나로 묶여 최신순으로 보입니다.
      </p>
      <AddButton
        label='연혁 추가'
        onClick={() => l.add(blank.history())}
      />
      {rows.map((r, i) => (
        <Card key={i} onRemove={() => l.remove(i)}>
          <div className='grid grid-cols-2 gap-3'>
            <Field label='연도'>
              <input
                type='number'
                className={input}
                value={r.Year || ''}
                onChange={(e) => l.set(i, { Year: Number(e.target.value) })}
              />
            </Field>
            <Field label='월'>
              <select className={input} value={r.Month || ''} onChange={(e) => l.set(i, { Month: Number(e.target.value) })}>
                <option value=''>선택</option>
                {Array.from({ length: 12 }, (_, m) => (
                  <option key={m} value={m + 1}>
                    {m + 1}월
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <div className='grid gap-3 sm:grid-cols-2'>
            <Field label='국문'>
              <textarea rows={3} className={input} value={r.Content} onChange={(e) => l.set(i, { Content: e.target.value })} />
            </Field>
            <Field label='영문'>
              <textarea
                rows={3}
                className={input}
                value={r.Content_en}
                onChange={(e) => l.set(i, { Content_en: e.target.value })}
              />
            </Field>
          </div>
        </Card>
      ))}
    </section>
  );
}

export function AdminsPanel({ me }: { me: string }) {
  const [admins, setAdmins] = useState<string[] | null>(null);
  const [email, setEmail] = useState('');
  const refresh = () => listAdmins().then(setAdmins).catch((e) => toast.error(String(e)));
  useEffect(() => {
    refresh();
  }, []);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error('이메일 주소를 확인하세요.');
    try {
      await addAdmin(email, me);
      setEmail('');
      toast.success('추가했습니다. 그 계정으로 Google 로그인하면 바로 쓸 수 있습니다.');
      refresh();
    } catch (err) {
      toast.error(`추가 실패: ${err}`);
    }
  };

  const remove = async (target: string) => {
    if (!confirm(`${target} 계정을 관리자에서 뺄까요?`)) return;
    try {
      await removeAdmin(target);
      refresh();
    } catch (err) {
      toast.error(`삭제 실패: ${err}`);
    }
  };

  return (
    <section className='space-y-4'>
      <form onSubmit={add} className='flex gap-2'>
        <input
          className={input}
          type='email'
          value={email}
          placeholder='추가할 Google 계정 이메일'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={btn.primary}>추가</button>
      </form>
      <ul className='divide-y rounded-lg border bg-white'>
        {admins?.map((a) => (
          <li key={a} className='flex items-center justify-between px-4 py-3'>
            <span>{a}</span>
            {a === me ? (
              <span className='text-xs text-gray-500'>나 (자기 자신은 뺄 수 없습니다)</span>
            ) : (
              <button className={btn.danger} onClick={() => remove(a)}>
                빼기
              </button>
            )}
          </li>
        )) ?? <li className='px-4 py-3'>불러오는 중…</li>}
      </ul>
    </section>
  );
}

export function BackupsPanel({
  onRestore,
  onImportLegacy,
}: {
  onRestore: (c: CmsContent) => void;
  onImportLegacy: () => void;
}) {
  const [names, setNames] = useState<string[] | null>(null);
  useEffect(() => {
    listBackups().then(setNames).catch((e) => toast.error(String(e)));
  }, []);

  const restore = async (name: string) => {
    if (!confirm('이 시점의 내용을 편집 화면으로 불러올까요? 저장을 눌러야 사이트에 반영됩니다.')) return;
    try {
      onRestore(await loadBackup(name));
      toast.success('불러왔습니다. 확인 후 저장하세요.');
    } catch (e) {
      toast.error(`불러오기 실패: ${e}`);
    }
  };

  return (
    <section className='space-y-4'>
      <p className='text-sm text-gray-500'>저장할 때마다 직전 내용이 자동으로 백업됩니다.</p>
      <ul className='divide-y rounded-lg border bg-white'>
        {names?.length === 0 && <li className='px-4 py-3 text-sm text-gray-500'>아직 백업이 없습니다.</li>}
        {names?.map((n) => (
          <li key={n} className='flex items-center justify-between px-4 py-3'>
            <span className='text-sm'>{formatBackup(n)}</span>
            <button className={btn.outline} onClick={() => restore(n)}>
              이 시점으로 되돌리기
            </button>
          </li>
        )) ?? <li className='px-4 py-3'>불러오는 중…</li>}
      </ul>
      <button className={btn.outline} onClick={() => confirm('Google 시트의 현재 내용으로 편집 화면을 바꿀까요?') && onImportLegacy()}>
        Google 시트 데이터 다시 가져오기
      </button>
    </section>
  );
}

// 2026-10-19T04-30-49-429Z.json -> 2026-10-19 13:30 (KST)
function formatBackup(name: string) {
  const m = name.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/);
  if (!m) return name;
  const t = new Date(`${m[1]}T${m[2]}:${m[3]}:${m[4]}.${m[5]}Z`).getTime() + 9 * 3600_000;
  return new Date(t).toISOString().slice(0, 16).replace('T', ' ');
}

type Column<T> = {
  key: keyof T & string;
  label: string;
  kind: 'text' | 'longtext' | 'date' | 'bool' | 'number' | 'month' | 'image';
  width: string;
};

export const columns = {
  events: [
    { key: 'is_for_modal', label: '팝업', kind: 'bool', width: 'w-14' },
    { key: 'image_link', label: '이미지', kind: 'image', width: 'w-64' },
    { key: 'date', label: '날짜', kind: 'date', width: 'w-36' },
    { key: 'alt', label: '이미지 설명', kind: 'text', width: 'w-48' },
    { key: 'external_link', label: '클릭 시 이동 주소', kind: 'text', width: 'w-64' },
  ] satisfies Column<EventsDataItem>[],
  news: [
    { key: 'date', label: '날짜', kind: 'date', width: 'w-36' },
    { key: 'newsTitle', label: '제목', kind: 'longtext', width: 'w-72' },
    { key: 'newsInfo', label: '출처 표기', kind: 'text', width: 'w-44' },
    { key: 'newsSrc', label: '기사 주소', kind: 'text', width: 'w-56' },
    { key: 'newsContent', label: '요약', kind: 'longtext', width: 'w-96' },
    { key: 'imgSrc', label: '이미지', kind: 'image', width: 'w-64' },
  ] satisfies Column<NewsDataItem>[],
  history: [
    { key: 'Year', label: '연도', kind: 'number', width: 'w-24' },
    { key: 'Month', label: '월', kind: 'month', width: 'w-24' },
    { key: 'Content', label: '국문 (한 줄에 한 항목)', kind: 'longtext', width: 'w-96' },
    { key: 'Content_en', label: '영문 (한 줄에 한 항목)', kind: 'longtext', width: 'w-96' },
  ] satisfies Column<HistoryDataItem>[],
};

const cell =
  'w-full rounded border border-transparent bg-transparent px-2 py-1 text-sm hover:border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none';

function ImageCell({
  value,
  folder,
  onChange,
}: {
  value: string;
  folder: 'events' | 'news';
  onChange: (v: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const upload = async (file?: File) => {
    setBusy(true);
    const url = await uploadWithToast(file, folder);
    setBusy(false);
    if (url) onChange(url);
  };
  return (
    <div className='flex items-center gap-2'>
      <label
        title='클릭하거나 이미지를 끌어다 놓아 바꾸기'
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          upload(e.dataTransfer.files[0]);
        }}
        className='flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded border border-dashed border-gray-300 text-[10px] text-gray-400'
      >
        {busy ? '…' : value ? <img src={value} alt='' className='size-full object-cover' /> : '+ 이미지'}
        <input type='file' accept='image/*' hidden onChange={(e) => upload(e.target.files?.[0])} />
      </label>
      <input className={`${cell} text-xs text-gray-500`} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function SheetEditor<T extends object>({
  rows,
  onChange,
  cols,
  folder,
  make,
}: {
  rows: T[];
  onChange: (r: T[]) => void;
  cols: Column<T>[];
  folder?: 'events' | 'news';
  make: () => T;
}) {
  const l = useList(rows, onChange);
  const field = (r: T, c: Column<T>, i: number) => {
    const v = r[c.key] as unknown;
    const set = (value: unknown) => l.set(i, { [c.key]: value } as Partial<T>);
    switch (c.kind) {
      case 'bool':
        return (
          <input
            type='checkbox'
            className='m-2 size-5 appearance-auto'
            checked={Boolean(v)}
            onChange={(e) => set(e.target.checked)}
          />
        );
      case 'image':
        return <ImageCell value={String(v ?? '')} folder={folder!} onChange={set} />;
      case 'date':
        return <input type='date' className={cell} value={String(v ?? '')} onChange={(e) => set(e.target.value)} />;
      case 'number':
        return (
          <input type='number' className={cell} value={Number(v) || ''} onChange={(e) => set(Number(e.target.value))} />
        );
      case 'month':
        return (
          <select className={cell} value={Number(v) || ''} onChange={(e) => set(Number(e.target.value))}>
            <option value=''>선택</option>
            {Array.from({ length: 12 }, (_, m) => (
              <option key={m} value={m + 1}>
                {m + 1}월
              </option>
            ))}
          </select>
        );
      case 'longtext':
        return (
          <textarea rows={2} className={`${cell} resize-y`} value={String(v ?? '')} onChange={(e) => set(e.target.value)} />
        );
      default:
        return <input className={cell} value={String(v ?? '')} onChange={(e) => set(e.target.value)} />;
    }
  };

  return (
    <section className='space-y-4'>
      <AddButton label='행 추가' onClick={() => l.add(make())} />
      <div className='overflow-x-auto rounded-lg border bg-white'>
        <table className='min-w-full border-collapse text-left'>
          <thead className='bg-gray-100 text-xs text-gray-600'>
            <tr>
              <th className='w-10 px-2 py-2 text-center'>#</th>
              {cols.map((c) => (
                <th key={c.key} className={`${c.width} min-w-24 px-2 py-2 font-medium`}>
                  {c.label}
                </th>
              ))}
              <th className='w-14' />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className='border-t align-top hover:bg-gray-50'>
                <td className='px-2 py-2 text-center text-xs text-gray-400'>{i + 1}</td>
                {cols.map((c) => (
                  <td key={c.key} className='px-1 py-1'>
                    {field(r, c, i)}
                  </td>
                ))}
                <td className='px-1 py-1'>
                  <button className={btn.danger} onClick={() => l.remove(i)}>
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const HELP: { title: string; items: string[] }[] = [
  {
    title: '기본',
    items: [
      '내용을 고친 뒤 오른쪽 위 "저장하기"를 눌러야 홈페이지에 반영됩니다. 저장 후 홈페이지를 새로고침하면 바로 보입니다.',
      '저장하지 않고 창을 닫으려 하면 경고가 뜹니다.',
      '필수 칸이 비어 있으면 저장되지 않고 어떤 칸인지 알려 줍니다.',
      '이 창으로 돌아올 때마다 다른 관리자가 저장한 내용이 있는지 확인합니다. 내가 고치던 게 없으면 최신 내용을 자동으로 불러옵니다.',
      '고치던 중이었다면 노란 안내가 뜹니다. "최신 내용 불러오기"를 누르면 내 수정은 버리고 최신 내용을 받습니다. 그대로 저장하면 내 내용으로 덮어쓰며, 상대방 내용은 백업에 남습니다.',
      '여러 명이 동시에 고치면 한 사람의 수정만 남습니다. 큰 수정은 미리 말하고 하세요.',
      '오른쪽 위 "카드 / 시트"로 입력 화면과 표 화면을 바꿀 수 있습니다.',
      'Google 시트의 "배포하기"는 더 이상 홈페이지에 반영되지 않습니다. 이 페이지만 쓰세요.',
    ],
  },
  {
    title: '팝업',
    items: [
      '"+ 팝업/이벤트 추가"로 항목을 만들고 이미지를 끌어다 놓거나 클릭해 고릅니다. 5MB 이하 이미지는 자동으로 줄여서 올라갑니다.',
      '"홈페이지 팝업으로 띄우기"를 켠 항목이 첫 화면 팝업에 나옵니다. 여러 개를 켜면 10초마다 넘어갑니다.',
      '팝업을 누르면 소개 페이지로 이동합니다.',
      '모든 항목은 소개 페이지 이벤트 목록에도 보입니다. 끝난 행사는 팝업만 끄거나 삭제하세요.',
      '이미지가 없으면 저장되지 않습니다.',
    ],
  },
  {
    title: '뉴스',
    items: [
      '제목과 날짜는 필수입니다. 날짜순으로 자동 정렬됩니다.',
      '기사 주소를 넣으면 카드를 눌렀을 때 기사로 이동합니다.',
      '이미지는 끌어다 놓아 올리세요. 언론사 이미지 주소를 그대로 붙이면 나중에 깨질 수 있습니다.',
    ],
  },
  {
    title: '연혁',
    items: ['연도, 월, 국문 내용은 필수입니다.', '한 달에 여러 항목이면 줄을 바꿔 한 줄에 하나씩 적습니다. 영문도 같은 순서로 적습니다.'],
  },
  {
    title: '관리자',
    items: [
      '회사 Google 이메일을 입력하고 "추가"를 누르면 그 사람이 pspace.ai/admin 에 로그인해 바로 편집할 수 있습니다.',
      '"빼기"로 권한을 없앱니다. 자기 자신은 뺄 수 없어 관리자가 0명이 되지 않습니다.',
      '담당자가 바뀌면 새 담당자를 먼저 추가한 뒤 이전 담당자를 빼세요.',
    ],
  },
  {
    title: '백업',
    items: [
      '저장할 때마다 직전 내용이 자동으로 백업됩니다.',
      '"이 시점으로 되돌리기"는 편집 화면으로만 불러옵니다. 확인 후 "저장하기"를 눌러야 홈페이지에 반영됩니다.',
    ],
  },
];

export function HelpPanel() {
  return (
    <section className='space-y-4'>
      {HELP.map((s) => (
        <div key={s.title} className='rounded-lg border bg-white p-5'>
          <h2 className='mb-2 font-bold'>{s.title}</h2>
          <ul className='list-disc space-y-1 pl-5 text-sm leading-relaxed'>
            {s.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
