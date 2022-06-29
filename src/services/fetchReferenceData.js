

export default async function fetchReferenceData() {
    const res = await fetch("https://mocki.io/v1/46b4dafa-ea5a-4024-a046-2dfb90e9b7e2");
    return res.json()
}
