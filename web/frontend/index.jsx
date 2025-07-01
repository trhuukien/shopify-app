import { createRoot } from 'react-dom/client';
import './index.css';
import App from "~/App";
import Adapter from '~/components/adapter';

const shopDomain = new URLSearchParams(window.location.search).get('shop');
const origin = window.location.origin;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Adapter domain={shopDomain} origin={origin} children={<App />} />);
