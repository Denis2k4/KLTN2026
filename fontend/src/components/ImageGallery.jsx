import React from "react";

const ImageGallery = () => {

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            
                * {
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">FACILITIES</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">Take a look at the rich list of facilities offered by our hotels. We look forward to making your stay memorable and delightful.</p>
            <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://images.unsplash.com/photo-1633983482450-bfb7b566fe6a?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://plus.unsplash.com/premium_photo-1671209879721-3082e78307e3?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
            </div>
        </>
    );
};

export default  ImageGallery;