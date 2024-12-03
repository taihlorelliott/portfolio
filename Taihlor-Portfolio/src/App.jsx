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
  
  const heading = {
    color: 'Yellow',
    fontSize: '40px',
    textAlign: 'center',
    position: 'absolute', top: 0, left: 0, width: '100%'
}
const subtitle = {
  color: 'lightBlue',
  position: 'absolute', top: 60, left: 0, width: '100%',
  textAlign: 'center'
}
const headingTwo = {
  color: 'Yellow',
  position: 'absolute', top: 80, left: 0, width: '100%',
  textAlign: 'center'
}
const ulist = {
  color: 'lightBlue',
  listStyleType: 'none',
  position: 'absolute', top: 130, left: 0, width: '90%',
  textAlign: 'center'
}

const list = {
  textDecoration: 'none'
}


  return (
    <>
      <h1 style={heading}>Hello, Welcome to Taihlor's Portfolio!</h1>
      <p style={subtitle}>{language.text}</p>
      
      <h2 style={headingTwo}>Frontend/Backend Languages:</h2>
      <ul style={ulist}>
        {languages.map((language, index) => 
          <li style={list} key={index}>
            {language.done ? `Task Completed - ${language.text} - Comfort Level: ${language.comfort}`  : language.text }
          </li>
        )}
      </ul>


    </>
  );
};

export default App;
