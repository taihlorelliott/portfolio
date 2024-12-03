// src/App.jsx

const App = () => {

  const language = { text: 'Please see below the languages I have learned.', done: true}

  const languages = [
    {text: 'Learn JavaScript', done: true, comfort: 8},
    {text: 'Learn EJS', done: true, comfort: 9},
    {text: 'Learn Bootstrap', done: true, comfort: 8},
    {text: 'Learn JSX', done: true, comfort: 6},
    {text: 'Learn HTML', done: true, comfort: 9},
    {text: 'Learn CSS', done: true, comfort: 8},
    {text: 'Master React', done: false, comfort: 6},
  ];

  return (
    <>
      <h1>Hello, Welcome to Taihlor's Portfolio!</h1>
      <p>{language.text}</p>
      
      <h2>Frontend/Backend Languages:</h2>
      <ul>
        {languages.map((language, index) => 
          <li key={index}>
            {language.done ? `Task Completed - ${language.text} - Comfort Level: ${language.comfort}`  : language.text }
          </li>
        )}
      </ul>


    </>
  );
};

export default App;
