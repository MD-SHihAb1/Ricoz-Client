import React from 'react';
import Swal from 'sweetalert2';

const handleProduct = (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const title = form.title.value;
  const img = form.img.value;

  const product = {
    name: name,
    title,
    price,
    img,
  };

  console.log(product);

  fetch('http://localhost:5000/api/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product Added',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    });
};

const Form = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleProduct} className="form">
        <p className="title">Add Product</p>
        <p className="message">Add Brand New Product.</p>
        <div className="flex">
          <label>
            <input required name="name" placeholder="" type="text" className="input" />
            <span>Name</span>
          </label>

          <label>
            <input required name="price" placeholder="" type="text" className="input" />
            <span>Price</span>
          </label>
        </div>

        <label>
          <input required name="title" placeholder="" type="text" className="input" />
          <span>Title</span>
        </label>

        <label>
          <input required name="img" placeholder="" type="text" className="input" />
          <span>Photo URL</span>
        </label>

        <button className="submit">Publish</button>
        <p className="signin">
          Already have a product? <a href="#">Check</a>
        </p>

        {/* Remove `jsx` from the style tag */}
        <style>{`
          .form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 350px;
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
            position: relative;
          }

          .title {
            font-size: 28px;
            color: royalblue;
            font-weight: 600;
            letter-spacing: -1px;
            position: relative;
            display: flex;
            align-items: center;
            padding-left: 30px;
          }

          .message,
          .signin {
            color: rgba(88, 87, 87, 0.822);
            font-size: 14px;
          }

          .signin {
            text-align: center;
          }

          .signin a {
            color: royalblue;
          }

          .signin a:hover {
            text-decoration: underline royalblue;
          }

          .flex {
            display: flex;
            width: 100%;
            gap: 6px;
          }

          .form label {
            position: relative;
          }

          .form label .input {
            width: 100%;
            padding: 10px 10px 20px 10px;
            outline: 0;
            border: 1px solid rgba(105, 105, 105, 0.397);
            border-radius: 10px;
          }

          .form label .input + span {
            position: absolute;
            left: 10px;
            top: 15px;
            color: grey;
            font-size: 0.9em;
            cursor: text;
            transition: 0.3s ease;
          }

          .form label .input:placeholder-shown + span {
            top: 15px;
            font-size: 0.9em;
          }

          .form label .input:focus + span,
          .form label .input:valid + span {
            top: 30px;
            font-size: 0.7em;
            font-weight: 600;
          }

          .form label .input:valid + span {
            color: green;
          }

          .submit {
            border: none;
            outline: none;
            background-color: royalblue;
            padding: 10px;
            border-radius: 10px;
            color: #fff;
            font-size: 16px;
            transform: 0.3s ease;
          }

          .submit:hover {
            background-color: rgb(56, 90, 194);
          }
        `}</style>
      </form>
    </div>
  );
};

export default Form;
