// Import CSS
import "./App.css";
import { useState } from 'react';

// Counter Button component (independent counters)
function CounterButton() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>
        Kurang
      </button>
      <button onClick={handleReset} style={{ marginLeft: '10px', marginTop: '10px' }}>
        Reset
      </button>
      <button onClick={handleIncrement}  style={{ marginLeft: '10px', marginTop: '10px' }}>
        Tambah
      </button><p></p>
      <h1>{count}</h1>
    </div>
  );
}

// Simple Button component
function MyButton() {
  return (
    <button>
      Ini adalah tombol
    </button>
  );
}

// About Page component
function AboutPage() {
  return (
    <>
      <h1>Tentang</h1>
      <p>Halo.<br />Apa kabar?</p>
    </>
  );
}

// Shared Counter Button component (uses shared count and onClick handler)
function SharedCounterButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Diklik {count} kali
    </button>
  );
}

// User profile data
const user = {
  name: 'Kipli Hitam',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRS3rumhBwmHQlx9zaiQIRGGRbAS5syYK2XA&s',
  imageSize: 100,
};

// Profile component
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
        }}
      />
    </>
  );
}

// Product list data
const products = [
  { title: 'Kubis', isFruit: false, id: 1 },
  { title: 'Bawang Putih', isFruit: false, id: 2 },
  { title: 'Apel', isFruit: true, id: 3 },
];

// Shopping List component
function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'darkgreen' : 'white',
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

// Main App component
export default function App() {
  // Shared state for the "Penghitung yang diperbarui bersamaan" section
  const [count, setCount] = useState(0);

  // Shared handler function for updating the shared count
  function handleClick() {
    setCount(count + 5);
  }

  return (
    <div>
      <h2>Selamat datang di aplikasi saya</h2>
      <MyButton />
      <div>_______________________________________________________________________________________________________________________________________________________________________________________________</div>

      <AboutPage />
      <div>_______________________________________________________________________________________________________________________________________________________________________________________________</div>

      <Profile />
      <div>_______________________________________________________________________________________________________________________________________________________________________________________________</div>

      <h2>Daftar Belanja</h2>
      <ShoppingList />
      <div>_______________________________________________________________________________________________________________________________________________________________________________________________</div>

      <div>
        <h2>Penghitung yang diperbarui secara terpisah</h2>
        <CounterButton /> <p></p>
      </div>
      <div>_______________________________________________________________________________________________________________________________________________________________________________________________</div>

      <div>
        <h2>Penghitung yang diperbarui bersamaan</h2>
        <SharedCounterButton count={count} onClick={handleClick} /> <p></p>
        <SharedCounterButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
}
