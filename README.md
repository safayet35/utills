# utills

![thumbmail](https://raw.githubusercontent.com/safayet35/utills/main/public/assets/utills-web.jpg)

Lightweight, dependency-free utility functions for modern JavaScript and TypeScript projects.

This package is designed to be **simple**, **secure**, and **developer-friendly**.  
It works in both **Node.js** and **browser environments** and follows modern **ESM standards**.

👉 **Documentation:** https://utills.vercel.app/

---

## ✨ Features

-   JavaScript & TypeScript compatible
-   Modern ESM support
-   Zero external dependencies
-   Tree-shaking friendly
-   Browser & Node.js support
-   Crypto-based secure utilities
-   Fully unit-tested with **Vitest**

---

## 📦 Installation

```bash
npm install utills
```

# Usage

```bash
import {
  randomId,
  timeAgo,
} from "utills";

randomId();
timeAgo(Date.now() - 60000);
```

## Example Utilities

| Method             | Parameters        | Returns  | Description                                                  |
| ------------------ | ----------------- | -------- | ------------------------------------------------------------ |
| **randomId**       | `options?`        | `string` | Generates a secure random ID with configurable options.      |
| **generateSecret** | `length?`         | `string` | Generates a cryptographically secure secret token.           |
| **timeAgo**        | `date`, `locale?` | `string` | Returns human-readable relative time (e.g. "2 minutes ago"). |

## Testing

This project uses Vitest for unit testing.

All utility functions must include tests, even if they generate random values.

Run test

```bash
npm run test
```

Testing rules:

-   Each utility must have a corresponding test file
-   Random-based utilities should be tested using:
    -   output length
    -   output type
    -   allowed character sets
    -   error cases
-   Edge cases must be covered

## Contributing

Contributions are welcome and appreciated!

Before contributing, please read the guidelines below carefully.

## How to contribute

1: Fork the repository
Clone your Fork

2: Clone your fork

```bash
git clone https://github.com/safayet35/utills
```

3: Create a new branch

```bash
git checkout -b feature/new-utility
```

4: Add your utility function inside :

```bash
src/core/
```

Rules

-   One utility per file
-   Must support both JS & TS
-   Must handle invalid inputs properly

5: Export it from:

```bash
src/core/index.ts
```

6: Build and test

Add tests using Vitest for your utility.

```bash
npm run test
```

Pull requests **without tests will not be accepted**

7: Update Docs (Required)

This project has a docs website.

After adding a utility, you must update the docs data file:

```bash
docs/src/api/methods.data.js
```

Add your utility following the existing pattern, including:

-   name
-   description
-   parameters
-   return type
-   example usage

Example structure:

```bash
{
  name: "yourUtility",
  description: "What this utility does",
  params: [],
  returns: "string",
  example: `import { yourUtility } from "utills"

yourUtility();`
}
```

This data is used to render the API documentation UI

8: Build and verify

```bash
npm run build
```

9: Commit & Open PR

Use clear commit messages and open a Pull Request with a proper description.

## Contribution Guideline

-   One utility per file
-   No external dependencies
-   Use native APIs where possible
-   Handle edge cases properly
-   Keep code clean and readable
-   Tests are mandatory
-   Utilities should be reusable & generic

## Roadmap

-   More utility functions
-   Logging utilities
-   Optional advanced helpers
-   Unit tests

## License

MIT License © Safayet Rahman



