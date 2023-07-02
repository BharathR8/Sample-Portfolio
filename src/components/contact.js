import React from 'react';

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method:"POST",
            headers:{"Content-Type": "application/x-www-form-urlencoded" },
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({ "form-name": "contact", name, email, message}),
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
    

    return(
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe 
                      title="Google address"
                      src="https://www.google.com/mqps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY66dZWTgaQzuU17R8"
                    /> 
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="text-green-400 mt-1">
                                4181 129th PL SE, Apt X103 <br />
                                Bellevue, WA 98006
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p className="text-green-400 leading-relaxed">
                                bharathchandra.bcr@gmail.com
                            </p>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="text-green-400 leading-relaxed">360-209-9680</p>
                        </div>
                    </div>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Hire Me
                        </h2>
                        <p className="leading-relaxed mb-5">
                            I am a Software Developer with 5+ years of experience working with building responsive web applications from front to back proficient with a wide array of technologies ranging from JavaScript,React,HTML on the Front-End and Java,Node on the Back-End
                        </p>
                        <div className="relative mb-4">
                            <label html for="name" className="leading-7 text-sm text-gray-400">
                                Name
                            </label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:borderindigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" 
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                </form>
            </div>
        </section>
    )
}