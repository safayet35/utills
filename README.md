# utils

![thumbmail](./public/assets/utills-web.jpg)


Lightweight, dependency-free utility functions for modern JavaScript and TypeScript projects.

This package is designed to be simple, secure, and developer-friendly.  
It works in both **Node.js** and **browser environments** and follows modern **ESM standards**.

---

## ✨ Features

-   JavaScript & TypeScript compatible
-   Modern ESM support
-   Zero external dependencies
-   Tree-shaking friendly
-   Browser & Node.js support
-   Secure (crypto-based utilities)

---

## 📦 Installation

```bash
npm install utils
```

# Usage

```bash

import {
  randomId,
  timeAgo,
} from "utils";

randomId();
timeAgo(Date.now() - 60000);
```

## Available Utilities

| Method             | Parameters        | Returns  | Description                                                  |
| ------------------ | ----------------- | -------- | ------------------------------------------------------------ |
| **randomId**       | `options?`        | `string` | Generates a secure random ID with configurable options.      |
| **generateSecret** | `length?`         | `string` | Generates a cryptographically secure secret token.           |
| **timeAgo**        | `date`, `locale?` | `string` | Returns human-readable relative time (e.g. "2 minutes ago"). |

## Contributing

Contributions are welcome and appreciated.

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

5: Export it from:

```bash
src/core/index.ts
```

6: Build and test

```bash
npm run build
```

7: Commit your changes with a clear message

8: Open a Pull Request

## Contribution Guideline

-   One utility per file
-   No external dependencies
-   Use native APIs where possible
-   Handle edge cases properly
-   Keep code clean and readable

## Roadmap

-   More utility functions
-   Logging utilities
-   Optional advanced helpers
-   Unit tests

## License

MIT License © Safayet Rahman
