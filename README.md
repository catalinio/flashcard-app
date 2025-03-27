# Flashcard Application

A simple web-based flashcard application that loads questions and answers from a CSV file.

## Features

- Load flashcards from a CSV file
- Flip cards by clicking
- Navigate between cards using Previous/Next buttons
- Responsive design
- Works on local network

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd flashcards
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. Start the server:
```bash
npm start
```

## Usage

1. Access the application:
   - On the host computer: `http://localhost:3000`
   - On other devices in your network: `http://[your-host-ip]:3000`

2. To modify flashcards:
   - Edit the `public/flashcards.csv` file
   - Format: `question,answer` (one per line)
   - Restart the server after making changes

## File Structure

```
flashcard-app/
├── public/
│   ├── flashcards.csv    # Flashcard content
│   └── index.html        # Main HTML file
├── src/
│   ├── components/
│   │   └── Flashcard.jsx # Flashcard component
│   └── App.jsx          # Main application component
├── server.js            # Express server
├── webpack.config.js    # Webpack configuration
└── package.json         # Project dependencies
```

## Development

To modify the application:

1. Edit the source files in the `src` directory
2. Run `npm run build` to rebuild
3. Restart the server with `npm start`

## License

ISC 