const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('keep CSS', async () => {
  await run('a{ color: #000; }', 'a{ color: #000; }', { })
})

it('keep CSS var', async () => {
  await run('a{ --test: 1px; }', 'a{ --test: 1px; }', { })
})

it('remove empty CSS var', async () => {
  await run('a{ color: #fd0; --test: 1px; --test-2: ; }', 'a{ color: #fd0; --test: 1px; }', { })
})
