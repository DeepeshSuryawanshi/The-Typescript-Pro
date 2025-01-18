export function emailEncript(email:string):string{
    let [address,domain] = email.split("@");
    let firstletter = address.charAt(0);
    let hashedName = `${firstletter}${"*".repeat(address.length)}`
    return `${hashedName}@${domain}`
}
