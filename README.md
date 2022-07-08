# @jonz94/capacitor-intentionally-crash

Capacitor plugin to make app crash intentionally

## Install

```bash
npm install @jonz94/capacitor-intentionally-crash
npx cap sync
```

## Demo

A working example can be found in [example directory](./example) of this repository.

## Configuration

No configuration required for this plugin.

## Usage

```typescript
import { IntentionallyCrash } from '@jonz94/capacitor-intentionally-crash';

const makeAppCrash = async () => {
  await IntentionallyCrash.crash();
};
```

## API

<docgen-index>

* [`crash()`](#crash)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### crash()

```typescript
crash() => any
```

Make app crash

**Returns:** <code>any</code>

**Since:** 0.0.1

--------------------

</docgen-api>
