// Theme switch styles as a string constant
export const themeSwitchStyles = `
.switch { font-size: 17px; position: relative; display: inline-block; width: 4em; height: 2.2em; border-radius: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #2a2a2a; transition: 0.4s; border-radius: 30px; overflow: hidden; }
.slider:before { position: absolute; content: ''; height: 1.2em; width: 1.2em; border-radius: 20px; left: 0.5em; bottom: 0.5em; transition: 0.4s; transition-timing-function: cubic-bezier(0.81,-0.04,0.38,1.5); box-shadow: inset 8px -4px 0px 0px #fff; }
.switch input:checked + .slider { background-color: #00a6ff; }
.switch input:checked + .slider:before { transform: translateX(1.8em); box-shadow: inset 15px -4px 0px 15px #ffcf48; }
.switch input:checked + .slider .star { opacity: 0; }
.switch input:checked + .slider .cloud { opacity: 1; }
.star { background-color: #fff; border-radius: 50%; position: absolute; width: 5px; height: 5px; transition: all 0.4s; }
.star.star_1 { left: 2.5em; top: 0.5em; }
.star.star_2 { left: 2.2em; top: 1.2em; }
.star.star_3 { left: 3em; top: 0.9em; }
.cloud { width: 3.5em; position: absolute; bottom: -1.4em; left: -1.1em; opacity: 0; transition: all 0.4s; }
`;
