// 'use client';
// import { useState } from 'react';

// function SignupLogin() {
//   const [mode, setMode] = useState('login');
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     address: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const url =
//       mode === 'login'
//         ? 'http://localhost:7000/api/auth/Login'
//         : 'http://localhost:7000/api/auth/Signup';

//     const bodyData =
//       mode === 'login'
//         ? { email: formData.email, password: formData.password }
//         : formData;

//     try {
//       const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bodyData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Something went wrong');

//       alert(`${mode === 'login' ? 'Login' : 'Sign Up'} successful`);

//       if (data.token) {
//         localStorage.setItem('token', data.token);
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleMode = () => {
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//       address: '',
//     });
//     setError('');
//     setMode((prev) => (prev === 'login' ? 'signup' : 'login'));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
//         <h2 className="text-xl font-bold text-center text-blue-600">
//           {mode === 'login' ? 'Login' : 'Sign Up'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {mode === 'signup' && (
//             <>
//               <input
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
              
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//               <input
//                 name="address"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </>
//           )}

//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           {error && <div className="text-red-500 text-sm text-center">{error}</div>}

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full ${
//               loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//             } text-white py-2 rounded transition duration-200`}
//           >
//             {loading ? 'Submitting...' : mode === 'login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>

//         <p className="text-center text-sm">
//           {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <button onClick={toggleMode} className="text-blue-500 hover:underline">
//             {mode === 'login' ? 'Sign Up' : 'Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignupLogin;
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:7000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // if you're using cookies
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token (optional: localStorage, cookies, etc.)
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
