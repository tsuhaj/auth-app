import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import AuthLayer from "./components/Layers/AuthLayer.tsx";
import TestComponent from "./components/TestComponent.tsx";
import LayoutLayer from "./components/Layers/LayoutLayer.tsx";
import { Provider } from "react-redux";
import store from "./config/redux/store.ts";
import ProtectedRoute from "./config/routes/ProtectedRoute.tsx";
import Login from "./components/Pages/Login.tsx";
import Register from "./components/Pages/Register.tsx";
import NotificationLayer from "./components/Layers/NotificationLayer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayer />}>
					<Route element={<LayoutLayer />}>
						<Route element={<NotificationLayer />}>
							<Route index element={<App />} />

							<Route element={<ProtectedRoute />}>
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Register />} />
							</Route>

							<Route path="/test" element={<TestComponent text="Ahoj" />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
);
