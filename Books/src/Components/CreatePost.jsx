import React, { useState } from 'react';

function CreatePost({ addPost, onClose }) {
    // State to hold the form data
    const [post, setPost] = useState({
        title: '',
        imageUrl: '',
        content: '',
    });

    // Handle form field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({
        ...prevPost,
        [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (post.title) {
            addPost(post);
            setPost({ title: '', imageUrl: '', content: '', imageFile: null });
            onClose(); // Close the modal after submitting
        } else {
        alert('Title is required.'); 
        }
    };

    return (
        <div className="modal-content" id='new-post'>
            <div className="modal-header">
                <h5 className="modal-title">Create New Post</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={onClose}/>
            </div>
        
            {/* Form */}
            <form onSubmit={handleSubmit}> 
                <div className="modal-body">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="title"
                            value={post.title}
                            onChange={handleChange}
                            className="form-control"
                            id="titleInput"
                            placeholder="Enter post title"
                            required
                        />
                        <label htmlFor="titleInput">Post Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="imageUrl"
                            value={post.imageUrl}
                            onChange={handleChange}
                            className="form-control"
                            id="imageUrlInput"
                            placeholder="Enter image URL"
                        />
                        <label htmlFor="imageUrlInput">Image URL (Optional)</label>
                    </div>
                    <div className="form-floating">
                        <textarea
                            name="content"
                            value={post.content}
                            onChange={handleChange}
                            className="form-control"
                            id="contentInput"
                            placeholder="Enter content (Optional)"
                            style={{ height: '150px' }}
                        />
                        <label htmlFor="contentInput">Content (Optional)</label>
                    </div>
                </div>

                {/* Create Button */}
                <div className="modal-footer">
                    <button type="submit" className="btn btn-info">Create Post</button> {/* Ensure this triggers handleSubmit */}
                </div>
            </form>
        </div>
    );
}

    export default CreatePost;
