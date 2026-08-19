'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  HOUSING_P_HOUSE_BANNER,
  HOUSING_FEATURE1_DEFECT,
  HOUSING_FEATURE1_DEFECT_EN,
  HOUSING_FEATURE2_FURNITURE,
  HOUSING_FEATURE2_FURNITURE_EN,
  HOUSING_SOLUTION1_MERGED,
  HOUSING_SOLUTION1_MERGED_EN,
  HOUSING_SOLUTION2_MERGED,
  HOUSING_SOLUTION2_MERGED_EN,
  HOUSING_SOLUTION3_MERGED,
  HOUSING_SOLUTION3_MERGED_EN,
  HOUSING_SOLUTION4_MERGED,
  HOUSING_SOLUTION4_MERGED_EN,
  HOUSING_CASE1_IMAGE8,
  HOUSING_CASE2_IMAGE,
  HOUSING_CASE3_IMAGE,
  HOUSING_ICON_CHEVRON_RIGHT,
  HOUSING_ICON_X_CIRCLE,
  HOUSING_ICON_CHECK_CIRCLE,
} from '@/lib/images';
import MultilineText from './MultilineText';

function FeatureRow({
  reverse,
  label,
  title,
  forceTitleBreak,
  desc,
  descLineClassNames,
  images,
  bg,
  note,
  stats,
}: {
  reverse?: boolean;
  label: string;
  title: string;
  /** Keep title.split('\n') lines stacked at every width instead of merging into one line at 1400px+. */
  forceTitleBreak?: boolean;
  desc: string;
  /** Per-line class overrides for desc, e.g. to adjust spacing on a specific line. */
  descLineClassNames?: string[];
  images: string[];
  bg: string;
  note?: { title: string; desc: string };
  stats?: { value: string; label: string; sub?: string }[];
}) {
  return (
    <div
      className={`w-full flex ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'} items-center gap-6`}
    >
      <div className='flex-1 w-full flex flex-col gap-3'>
        <p className='text-[#107fa7] font-bold text-[14px] sm:text-[16px]'>{label}</p>
        <p className='text-[#0a2540] font-extrabold text-[22px] sm:text-[28px] tracking-tight'>
          {/* line break only below 1400px; single line above that, per the Figma desktop layout --
              unless forceTitleBreak, which keeps the break at every width (per that title's own Figma frame) */}
          {title.split('\n').map((line, idx) => (
            <span key={idx} className={forceTitleBreak ? 'block' : 'block min-[1400px]:inline'}>
              {idx > 0 && !forceTitleBreak ? ' ' : ''}
              {line}
            </span>
          ))}
        </p>
        <p
          className={`flex flex-col text-[#53616f] text-[15px] sm:text-[16px] leading-[1.7] ${descLineClassNames ? '' : 'gap-2'}`}
        >
          <MultilineText text={desc} lineClassNames={descLineClassNames} />
        </p>
        {note && (
          <div className='flex flex-col gap-0.5 pt-2'>
            <p className='text-[#37bdec] font-extrabold text-[18px] sm:text-[22px]'>
              {note.title}
            </p>
            <p className='text-[#6b7885] text-[13px]'>{note.desc}</p>
          </div>
        )}
        {stats && (
          <div className='flex gap-9 pt-2'>
            {stats.map((s) => (
              <div key={s.label} className='flex flex-col gap-0.5'>
                <p className='text-[#37bdec] font-extrabold text-[22px] sm:text-[28px]'>
                  {s.value}
                </p>
                <p className='text-[#6b7885] text-[13px]'>
                  {s.label} {s.sub && <span className='text-[#9aa7b4]'>{s.sub}</span>}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* aspect-[7/5] matches the source images' own ratio (~1.4) so mobile's full-width box
          doesn't force a fixed 220px height that crops the top/bottom; sm:h-[300px] takes over
          once the box stops being full-width */}
      <div
        className={`w-full lg:w-[420px] shrink-0 aspect-[7/5] sm:h-[300px] rounded-xl overflow-hidden flex gap-1 ${bg}`}
      >
        {images.map((img, i) => (
          <img key={i} alt='' className='flex-1 min-w-0 h-full object-cover' src={img} />
        ))}
      </div>
    </div>
  );
}

function LineupCard({
  title,
  desc,
  image,
  descClassName = 'text-[#6b7885] text-[13px] leading-[1.6]',
}: {
  title: string;
  desc: string;
  image: string;
  /** ponytail: override when a card's desc needs different mobile wrap behavior than the default. */
  descClassName?: string;
}) {
  return (
    <div className='flex-1 min-w-[200px] flex flex-col gap-2 border border-[#e6ebf0] bg-white p-5'>
      <p className='text-[#0a2540] font-extrabold text-[16px] leading-[1.4] min-h-[45px]'>{title}</p>
      <div className='w-full max-w-[242px] mx-auto xl:max-w-none xl:mx-0 h-[244px] rounded-xl bg-white flex items-center justify-center overflow-hidden'>
        <img alt='' className='size-full object-cover' src={image} />
      </div>
      <p className={descClassName}>
        <MultilineText text={desc} />
      </p>
    </div>
  );
}

function PSVRow({ tag, text }: { tag: string; text: string }) {
  const { language } = useLanguage();
  // ponytail: ko tags are 2 chars ("문제"/"해결"/"가치"/"구현") so they don't need the 62px
  // column en tags ("Problem"/"Solution") need to avoid wrapping - narrower on mobile for ko only.
  const tagWidth = language === 'ko' ? 'w-[34px] sm:w-[62px]' : 'w-[62px]';
  return (
    <div className='flex gap-1 sm:gap-2 items-baseline'>
      <span className={`text-[#37bdec] font-bold text-[11px] shrink-0 ${tagWidth}`}>{tag}</span>
      <span className='text-[#3a4a57] text-[12.9px]'>{text}</span>
    </div>
  );
}

function HousingCaseStudy({
  title,
  code,
  desc,
  rows,
  image,
  imageClassName,
}: {
  title: string;
  code: string;
  desc: string;
  rows: { label: string; text: string }[];
  image: string;
  imageClassName?: string;
}) {
  return (
    <div className='w-full flex flex-col-reverse min-[1400px]:flex-row gap-7 items-stretch border border-[#e6ebf0] bg-white px-6 sm:px-10 min-[1400px]:px-[49px]'>
      <div className='flex-1 w-full flex flex-col gap-4 py-6 min-[1400px]:py-[48px]'>
        <div className='flex flex-col gap-1'>
          <span className='text-[#0a2540] font-extrabold text-[20px] sm:text-[24px]'>{title}</span>
          <span className='text-[#9aa7b4] font-extrabold text-[16px] sm:text-[20px]'>{code}</span>
        </div>
        <p className='text-[#53616f] text-[13.6px] leading-[1.7]'>
          <MultilineText text={desc} />
        </p>
        <div className='flex flex-col gap-1.5'>
          {rows.map((r) => (
            <PSVRow key={r.label} tag={r.label} text={r.text} />
          ))}
        </div>
      </div>
      <div className='w-full min-[1400px]:w-[540px] shrink-0 aspect-[540/420] min-[1400px]:aspect-auto overflow-hidden bg-white'>
        <img alt='' className={imageClassName ?? 'size-full object-contain'} src={image} />
      </div>
    </div>
  );
}

export default function Housing() {
  const { t, language } = useLanguage();

  const caseRows = (prefix: 'case1' | 'case2' | 'case3') => [
    { label: t('housing.caseLabelProblem'), text: t(`housing.${prefix}Problem`) },
    { label: t('housing.caseLabelSolution'), text: t(`housing.${prefix}Solution`) },
    { label: t('housing.caseLabelValue'), text: t(`housing.${prefix}Value`) },
    { label: t('housing.caseLabelImpl'), text: t(`housing.${prefix}Impl`) },
  ];

  return (
    <section
      id='phouse'
      className='w-full flex justify-center bg-[#fafbfc] border-y border-[#eef1f4] px-4 md:px-[60px] lg:px-[120px] py-16 lg:py-24'
    >
      <div className='w-full max-w-[1200px] flex flex-col gap-14'>
        <div className='w-full flex flex-col lg:flex-row items-start justify-between gap-6'>
          <img
            alt='P-House'
            className='w-[220px] sm:w-[280px] object-contain'
            src={HOUSING_P_HOUSE_BANNER.src}
          />
          <div className='w-full lg:w-auto flex flex-col items-end gap-2 text-right'>
            <h2 className='text-[#0a2540]/80 font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.18] tracking-tight'>
              <span className='font-normal'>{t('housing.headingLine1')}</span>
              <br />
              <span className='text-[#14a0d2]'>{t('housing.headingBold')}</span>
            </h2>
            <p
              className={`text-[#53616f] text-[16px] sm:text-[18px] leading-[1.7] ${language === 'ko' ? '' : 'lg:whitespace-nowrap lg:text-[15px]'}`}
            >
              {(() => {
                const [line1, line2] = t('housing.subtitle').split('\n');
                // ponytail: pin the mobile-only 3rd-line break after "운영과" instead of letting
                // it float with natural wrap, which shifts at different mobile widths.
                const breakWord = '운영과 ';
                const breakAt = language === 'ko' && line2 ? line2.indexOf(breakWord) : -1;
                return (
                  <>
                    <span className='block'>{line1}</span>
                    <span className='block'>
                      {breakAt === -1 ? (
                        line2
                      ) : (
                        <>
                          {line2.slice(0, breakAt + breakWord.length)}
                          <br className='sm:hidden' />
                          {line2.slice(breakAt + breakWord.length)}
                        </>
                      )}
                    </span>
                  </>
                );
              })()}
            </p>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 rounded-2xl border border-[#e6ebf0] bg-white p-6 sm:p-10'>
          <FeatureRow
            label={t('housing.feature1Label')}
            title={t('housing.feature1Title')}
            desc={t('housing.feature1Desc')}
            images={[language === 'en' ? HOUSING_FEATURE1_DEFECT_EN.src : HOUSING_FEATURE1_DEFECT.src]}
            bg='bg-[#e4e3e4]'
            note={{ title: t('housing.feature1StatTitle'), desc: t('housing.feature1StatDesc') }}
          />
          <div className='h-px w-full bg-[#e6ebf0]' />
          <FeatureRow
            reverse
            label={t('housing.feature2Label')}
            title={t('housing.feature2Title')}
            forceTitleBreak
            desc={t('housing.feature2Desc')}
            descLineClassNames={['mb-2', 'mb-1 min-[640px]:inline', 'min-[640px]:inline']}
            images={[language === 'en' ? HOUSING_FEATURE2_FURNITURE_EN.src : HOUSING_FEATURE2_FURNITURE.src]}
            bg='bg-[#edecef]'
            stats={[
              {
                value: t('housing.feature2Stat1Num'),
                label: t('housing.feature2Stat1Label'),
                sub: t('housing.feature2Stat1Sub'),
              },
              {
                value: t('housing.feature2Stat2Num'),
                label: t('housing.feature2Stat2Label'),
                sub: t('housing.feature2Stat2Sub'),
              },
            ]}
          />
        </div>

        <div className='w-full flex flex-col gap-4'>
          <h3 className='text-[#004592] font-bold text-[22px] sm:text-[27px] text-left'>
            {t('housing.coreStrengthTitle')}
          </h3>
          <div
            className='w-full flex flex-col gap-6 p-6 sm:p-11'
            style={{
              backgroundImage: 'linear-gradient(111deg, #eaf7fd 0%, #bcd4e8 100%)',
            }}
          >
            <p className='text-[#4c6070] font-normal text-[18px] sm:text-[24px]'>
              {t('housing.coreStrengthHeadlinePre')}
              <span className='font-extrabold text-[#004592]'>
                {t('housing.coreStrengthHeadlineBold')}
              </span>
              {t('housing.coreStrengthHeadlinePost')}
            </p>
            {/* ponytail: Korean labels are short enough to stay on one row at sm+ (per Figma), so ko
                goes horizontal (equal-width grid) with a right chevron there, but stacks vertically
                on mobile like the non-ko fallback. English step text overflowed that row before it
                could wrap, so non-ko keeps the always-vertical fallback regardless of label length. */}
            {language === 'ko' ? (
              <div className='flex flex-col min-[1400px]:grid min-[1400px]:grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-center gap-2 min-[1400px]:gap-3'>
                <span className='w-full min-[1400px]:w-auto max-w-[520px] min-[1400px]:max-w-none text-center rounded-full bg-[#004592] text-white text-[15px] sm:text-[18px] font-semibold px-6 sm:px-10 py-3'>
                  {t('housing.flowStep1')}
                </span>
                <img
                  alt=''
                  src={HOUSING_ICON_CHEVRON_RIGHT}
                  className='size-5 shrink-0 rotate-90 min-[1400px]:rotate-0'
                />
                <span className='w-full min-[1400px]:w-auto max-w-[520px] min-[1400px]:max-w-none text-center rounded-full bg-[#004592] text-white text-[15px] sm:text-[18px] font-semibold px-6 sm:px-10 py-3'>
                  {t('housing.flowStep2')}
                </span>
                <img
                  alt=''
                  src={HOUSING_ICON_CHEVRON_RIGHT}
                  className='size-5 shrink-0 rotate-90 min-[1400px]:rotate-0'
                />
                <span className='w-full min-[1400px]:w-auto max-w-[520px] min-[1400px]:max-w-none text-center rounded-full bg-[#004592] text-white text-[15px] sm:text-[18px] font-semibold px-6 sm:px-10 py-3'>
                  {t('housing.flowStep3')}
                </span>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center gap-2'>
                <span className='w-full max-w-[520px] text-center rounded-full bg-[#004592] text-white text-[15px] sm:text-[18px] font-semibold px-8 sm:px-16 py-3'>
                  {t('housing.flowStep1')}
                </span>
                <img alt='' src={HOUSING_ICON_CHEVRON_RIGHT} className='size-5 shrink-0 rotate-90' />
                <span className='w-full max-w-[520px] text-center rounded-full bg-[#004592] text-white text-[15px] sm:text-[18px] font-semibold px-8 sm:px-16 py-3'>
                  {t('housing.flowStep2')}
                </span>
                <img alt='' src={HOUSING_ICON_CHEVRON_RIGHT} className='size-5 shrink-0 rotate-90' />
                <span className='w-full max-w-[520px] text-center rounded-full bg-[#004592] text-white text-[15px] sm:text-[18px] font-semibold px-8 sm:px-16 py-3'>
                  {t('housing.flowStep3')}
                </span>
              </div>
            )}
            <div className='hidden sm:flex flex-col gap-2 rounded-lg bg-white px-4 sm:px-8 py-4'>
              <div className='flex gap-2 items-start'>
                <img alt='' src={HOUSING_ICON_X_CIRCLE} className='size-5 shrink-0 mt-0.5' />
                <p className='text-[#3a4a57] text-[14px] leading-[1.6]'>{t('housing.pointBad')}</p>
              </div>
              <div className='flex gap-2 items-start'>
                <img alt='' src={HOUSING_ICON_CHECK_CIRCLE} className='size-5 shrink-0 mt-0.5' />
                <p className='text-[#3a4a57] text-[14px] leading-[1.6]'>
                  {t('housing.pointGood1')}
                </p>
              </div>
              <div className='flex gap-2 items-start'>
                <img alt='' src={HOUSING_ICON_CHECK_CIRCLE} className='size-5 shrink-0 mt-0.5' />
                <p className='text-[#3a4a57] text-[14px] leading-[1.6]'>
                  {t('housing.pointGood2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[#004592] font-bold text-[22px] sm:text-[27px]'>
              {t('housing.lineupTitle')}
            </h3>
            <p className='text-[#53616f] text-[16px] sm:text-[18px]'>
              {t('housing.lineupSubtitle')}
            </p>
          </div>
          <div className='flex flex-col xl:flex-row gap-4'>
            <LineupCard
              title={t('housing.lineup1Title')}
              desc={t('housing.lineup1Desc')}
              image={language === 'en' ? HOUSING_SOLUTION1_MERGED_EN.src : HOUSING_SOLUTION1_MERGED.src}
            />
            <LineupCard
              title={t('housing.lineup2Title')}
              desc={t('housing.lineup2Desc')}
              image={language === 'en' ? HOUSING_SOLUTION2_MERGED_EN.src : HOUSING_SOLUTION2_MERGED.src}
              descClassName='text-[#6b7885] text-[11px] sm:text-[13px] leading-[1.6] whitespace-nowrap sm:whitespace-normal overflow-x-auto'
            />
            <LineupCard
              title={t('housing.lineup3Title')}
              desc={t('housing.lineup3Desc')}
              image={language === 'en' ? HOUSING_SOLUTION3_MERGED_EN.src : HOUSING_SOLUTION3_MERGED.src}
            />
            <LineupCard
              title={t('housing.lineup4Title')}
              desc={t('housing.lineup4Desc')}
              image={language === 'en' ? HOUSING_SOLUTION4_MERGED_EN.src : HOUSING_SOLUTION4_MERGED.src}
            />
          </div>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <h3 className='text-[#004592] font-bold text-[22px] sm:text-[27px] text-left'>
            {t('housing.caseStudiesTitle')}
          </h3>
          <HousingCaseStudy
            title={t('housing.case1Title')}
            code={t('housing.case1Code')}
            desc={t('housing.case1Desc')}
            rows={caseRows('case1')}
            image={HOUSING_CASE1_IMAGE8.src}
          />
          <HousingCaseStudy
            title={t('housing.case2Title')}
            code={t('housing.case2Code')}
            desc={t('housing.case2Desc')}
            rows={caseRows('case2')}
            image={HOUSING_CASE2_IMAGE.src}
          />
          <HousingCaseStudy
            title={t('housing.case3Title')}
            code={t('housing.case3Code')}
            desc={t('housing.case3Desc')}
            rows={caseRows('case3')}
            image={HOUSING_CASE3_IMAGE.src}
          />
        </div>
      </div>
    </section>
  );
}
