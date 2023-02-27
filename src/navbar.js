import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
    return (
        <div className="nav">
            {/* Pedals are numbered clockwise */}

            <div id="pCenter">

                {/* Logo Goes here! */}

            </div>
            <div className="link" id="p1">
            <CustomLink to="/">1</CustomLink>
            </div>

            <div className="link" id="p2">
            <CustomLink to="/">2</CustomLink>
            </div>

            <div className="link" id="p3">
            <CustomLink to="/">3</CustomLink>
            </div>

            <div className="link" id="p4">
            <CustomLink to="/">4</CustomLink>
            </div>

            <div className="link" id="p5">
            <CustomLink to="/">5</CustomLink>
            </div>

            <div className="link" id="p6">
            <CustomLink to="/">6</CustomLink>
            </div>
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
        <Link to = {to} {...props}>
        { children }
        </Link>
        </li>
    )
}