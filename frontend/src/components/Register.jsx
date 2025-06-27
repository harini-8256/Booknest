// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/register', form);
//       alert(res.data.message); // ✅ Shows exact message from backend
//     } catch (err) {
//       console.error("❌ Registration Error:", err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })} required /><br />
//       <input type="email" placeholder="Email" value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })} required /><br />
//       <input type="password" placeholder="Password" value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })} required /><br />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert(res.data.message);
      navigate('/login'); // Redirect to login after success
    } catch (err) {
      console.error("❌ Registration Error:", err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} required /><br />
      <input type="email" placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} required /><br />
      <input type="password" placeholder="Password" value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })} required /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
