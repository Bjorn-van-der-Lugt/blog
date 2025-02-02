"use client";

import React, { useState } from 'react';

export default function NewsLetterForm() {
    return (
     <>
        <h3>Subscribe to my newsletter</h3>
        <p>Sign up if you're interested. If enough people subscribe, I'll start sending newsletters with the latest blog news.</p>
        <button>Subscribe <i className="fa-duotone fa-solid fa-envelope"></i></button>
    </>
    )

}