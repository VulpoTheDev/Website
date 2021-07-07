import React from "react";

export default function Social({ href, icon }) {
    return (
            <a href={href}>
                <i className={icon}></i>
            </a>
    );
}
