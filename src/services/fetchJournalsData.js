
export default async function fetchJournalsData() {
    const res = await fetch("https://mocki.io/v1/f3a8670c-0e23-4883-8bec-1900f2b45ee2");
    return res.json()
}
