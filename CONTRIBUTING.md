# Contributing to MERN Stack Deployment Project

Thank you for considering contributing to this project! This document provides guidelines for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Maintain a professional environment

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, etc.)
   - Screenshots if applicable

### Suggesting Enhancements

1. Check if the enhancement has been suggested
2. Create a new issue with:
   - Clear title and description
   - Use case and benefits
   - Possible implementation approach

### Pull Requests

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/your-fork.git
   cd your-fork
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Write clear, documented code
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

4. **Test your changes**

   ```bash
   # Backend tests
   cd backend
   npm test

   # Frontend tests
   cd frontend
   npm test
   ```

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   Follow conventional commits:

   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting)
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance tasks

6. **Push to your fork**

   ```bash
   git push origin feature/amazing-feature
   ```

7. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Link related issues

### Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Update documentation for any changed functionality
- Ensure all tests pass
- Add tests for new features
- Keep commits clean and atomic
- Respond to review feedback promptly

## Development Setup

1. **Clone and install dependencies**

   ```bash
   git clone <repo-url>
   cd deployment-and-devops-essentials

   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

2. **Set up environment variables**

   - Copy `.env.example` files
   - Fill in required values

3. **Start development servers**

   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

## Coding Standards

### JavaScript/React

- Use ES6+ features
- Use functional components and hooks
- Follow Airbnb style guide
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### File Organization

- One component per file
- Group related files together
- Use clear, descriptive file names
- Follow existing directory structure

### Git Commit Messages

```
type(scope): subject

body (optional)

footer (optional)
```

Example:

```
feat(tasks): add task priority filtering

- Add priority filter dropdown
- Update TaskList component
- Add tests for priority filtering

Closes #123
```

## Testing

### Backend Tests

```bash
cd backend
npm test                 # Run all tests
npm test -- --watch     # Watch mode
npm test -- --coverage  # With coverage
```

### Frontend Tests

```bash
cd frontend
npm test                          # Run all tests
npm test -- --watch              # Watch mode
npm test -- --coverage           # With coverage
```

### Writing Tests

#### Backend (Jest + Supertest)

```javascript
describe("GET /api/tasks", () => {
  test("should return all tasks", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
```

#### Frontend (React Testing Library)

```javascript
test("renders task list", () => {
  render(<TaskList />);
  const heading = screen.getByText(/task list/i);
  expect(heading).toBeInTheDocument();
});
```

## Documentation

- Update README.md for major changes
- Document new environment variables
- Add JSDoc comments for functions
- Update API documentation
- Include examples where helpful

## Review Process

1. Automated checks must pass (CI/CD)
2. Code review by maintainer(s)
3. Changes requested or approved
4. Merge after approval

## Questions?

- Open an issue for questions
- Tag with "question" label
- Check existing issues/discussions first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
