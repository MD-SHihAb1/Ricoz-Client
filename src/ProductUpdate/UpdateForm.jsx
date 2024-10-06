
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2"; // Ensure this is installed if using SweetAlert2

const UpdateForm = () => {
    const product = useLoaderData();
    const { _id, name, title, price, img } = product;

    const handleUpdateProduct = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData.entries());
        
        const {
            img,
            name,
            price,
            title,
        } = formProps;

        const updatedProduct = {
            img,
            name,
            price,
            title,
        };
        
        console.log(updatedProduct);

        fetch(`http://localhost:5000/api/product/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Success!",
                  text: "Updated Successfully",
                  icon: "success",
                  confirmButtonText: "OK",
                });
              }
              form.reset();
            });
    };

    return (
        <div className="my-20">
            <style>{`
                .form {
                    background-color: #fff;
                    display: block;
                    padding: 1rem;
                    max-width: 350px;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    margin: 0 auto;
                }

                .form h1 {
                    text-align: center;
                    font-weight: 600;
                    color: #000;
                }

                .input-container {
                    margin: 8px 0;
                }

                .input-container input {
                    outline: none;
                    border: 1px solid #e5e7eb;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    width: 100%;
                }

                .submit {
                    display: block;
                    padding: 0.75rem;
                    background-color: #4F46E5;
                    color: #ffffff;
                    font-size: 0.875rem;
                    font-weight: 500;
                    width: 100%;
                    border-radius: 0.5rem;
                    text-transform: uppercase;
                    border: none;
                    cursor: pointer;
                }

                .submit:hover {
                    background-color: #3730a3;
                }
            `}</style>

            <h1 className="text-center m-10 text-xl">Update Product: {name}</h1>
            <form className="form" onSubmit={handleUpdateProduct}>
                <div className="input-container">
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={name} 
                        placeholder="Product Name" 
                        required 
                    />
                </div>
                <div className="input-container">
                    <input 
                        type="text" 
                        name="title" 
                        defaultValue={title} 
                        placeholder="Product Title" 
                        required 
                    />
                </div>
                <div className="input-container">
                    <input 
                        type="number" 
                        name="price" 
                        defaultValue={price} 
                        placeholder="Product Price" 
                        required 
                    />
                </div>
                <div className="input-container">
                    <input 
                        type="text" 
                        name="img" 
                        defaultValue={img}
                        placeholder="Image URL" 
                        required 
                    />
                </div>
                <button type="submit" className="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateForm;
