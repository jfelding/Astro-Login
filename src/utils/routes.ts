export function dbLogin(email: string, password: string) {
  let username: string | null = null;
  let success: boolean = true;
  return new Promise((resolve, reject) => {
    if (email === "arne@repaircafedanmark.dk" && password === "1234") {
      username = "Repair Cafe Nørrebrohallen";
    } else {
      success = false;
    }
    resolve({ success, username });
  });
}
