// node scripts/check-cms-data.mts
import assert from 'node:assert/strict';
import { fromFullData, toFullData, toKstDate } from '../src/lib/cms-data.ts';

assert.equal(toKstDate('2026-10-13T15:00:00.000Z'), '2026-10-14', 'sheet date shifts back to KST day');
assert.equal(toKstDate('2026-10-14'), '2026-10-14', 'plain date kept');
assert.equal(toKstDate(''), '', 'empty kept');

const legacy = {
  sheets: {
    events: { rows: [{ date: '2026-10-13T15:00:00.000Z', is_for_modal: true, image_link: 'a.png', external_link: '', alt: 'x' }] },
    news: { rows: [{ date: '2026-09-21T15:00:00.000Z', newsSrc: 'u', imgSrc: 'i', newsTitle: 't', newsInfo: 'n', newsContent: 'c', '': 'memo' }] },
    history: { rows: [{ Year: '', Month: '', Content: '', Content_en: '' }, { Year: 2026, Month: 3, Content: '가', Content_en: 'a' }] },
  },
};
const c = fromFullData(legacy);
assert.equal(c.events[0].date, '2026-10-14');
assert.ok(!('' in c.news[0]), 'blank-header column dropped');
assert.equal(c.history.length, 1, 'blank history row dropped');

const out = toFullData(c);
assert.deepEqual(out.sheetNames, ['events', 'news', 'history']);
assert.deepEqual(fromFullData(out), c, 'round trip is stable');
console.log('cms-data ok');
