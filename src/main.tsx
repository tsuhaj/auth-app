import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import AuthLayer from "./components/Layers/AuthLayer.tsx";
import LayoutLayer from "./components/Layers/LayoutLayer.tsx";
import { Provider } from "react-redux";
import store from "./config/redux/store.ts";
import Login from "./components/Pages/Login.tsx";
import Register from "./components/Pages/Register.tsx";
import NotificationLayer from "./components/Layers/NotificationLayer.tsx";
import UnauthenticatedOnly from "./config/routes/UnauthenticatedOnly.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter basename="/auth-app/">
			<Routes>
				<Route element={<AuthLayer />}>
					<Route element={<LayoutLayer />}>
						<Route element={<NotificationLayer />}>
							<Route index element={<App />} />

							<Route element={<UnauthenticatedOnly />}>
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Register />} />
							</Route>
						</Route>
					</Route>
				</Route>
				<Route path="/laka" element={<div>cauko</div>} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
