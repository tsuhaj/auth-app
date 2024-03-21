export const firebaseErrors = {
	"auth/email-already-in-use": "Account with this email already exists",
};

export const getFirebaseError = (errorCode: string) => {
	return firebaseErrors[errorCode] ?? "An error has occured";
};
