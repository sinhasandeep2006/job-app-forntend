import { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('resume', resume);

    try {
      await axios.post('https://job-app-backend-14.onrender.com/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Signup successful!');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Error during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Phone</label>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Resume</label>
        <input 
          type="file" 
          onChange={(e) => setResume(e.target.files[0])} 
          required 
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default SignupForm;
