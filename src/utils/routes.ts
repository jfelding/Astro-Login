export function dbLogin(email: string, password: string) {
  let username: string | null = null;
  let success: boolean = true;
  return new Promise((resolve, reject) => {
    if (email === "test@repaircafedanmark.dk" && password === "test") {
      username = "Repair Cafe Nørrebrohallen";
    } else {
      success = false;
    }
    resolve({ success, username });
  });
}
