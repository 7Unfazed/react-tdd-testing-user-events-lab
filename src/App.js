import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInterestChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any additional actions, such as submitting data to a server
    setSubmitted(true);
  };
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />

        <label>Areas of Interest:</label>
        <label htmlFor="interest1">
          <input type="checkbox" id="interest1" name="interest1" checked={interests.interest1} onChange={handleInterestChange} />
          Interest 1
        </label>
        <label htmlFor="interest2">
          <input type="checkbox" id="interest2" name="interest2" checked={interests.interest2} onChange={handleInterestChange} />
          Interest 2
        </label>
        <label htmlFor="interest3">
          <input type="checkbox" id="interest3" name="interest3" checked={interests.interest3} onChange={handleInterestChange} />
          Interest 3
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>Form submitted successfully. Name: {name}. Interests: {Object.keys(interests).filter(interest => interests[interest]).join(', ')}</p>
      )}
    </main>
  );
}

export default App;
