# Test with Vitest

Test with Vitest is a project to validate the execution of tests using [vitest](https://vitest.dev/).

## Installation
Use the Node Package Manager [npm](https://www.npmjs.com/) to install the dependencies.

```bash
npm i
```

## Usage
The project has two scripts: ``test`` and ``test:coverage``.

To run the existing tests in the project, run the ``test`` command:
```bash
npm run test
```

The above command will output the following:
```bash
 ✓ src/entities/user.spec.ts (2)      
 ✓ src/useCases/CreateUser.spec.ts (1)

Test Files  2 passed (2)
     Tests  3 passed (3)
  Start at  12:47:10
  Duration  3.05s (transform 71ms, setup 0ms, collect 125ms, tests 16ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

\
To check test coverage in the project, run the ``test:coverage`` command:
```bash
npm run test:coverage
```

The above command will output the following:
```      
Coverage enabled with c8

 ✓ src/useCases/CreateUser.spec.ts (1)
 ✓ src/entities/user.spec.ts (2)      

Test Files  2 passed (2)
     Tests  3 passed (3)
  Start at  12:46:57
  Duration  3.30s (transform 60ms, setup 2ms, collect 112ms, tests 20ms)

 % Coverage report from c8
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 entities       |     100 |      100 |     100 |     100 | 
  user.ts       |     100 |      100 |     100 |     100 | 
 useCases       |     100 |      100 |     100 |     100 | 
  CreateUser.ts |     100 |      100 |     100 |     100 | 
----------------|---------|----------|---------|---------|-------------------
```