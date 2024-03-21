import { LogOut, Settings, User } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./shadcnui/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/ui/avatar";
import useAuth from "@/hooks/useAuth";

const NavbarAccount = () => {
	const { logoutUser } = useAuth();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="hover:cursor-pointer">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={logoutUser}>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default NavbarAccount;
