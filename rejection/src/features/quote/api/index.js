const fetchRandomQuote = async () => {
    const res = await fetch(`/api/quote/`);
    const {data: quotes} = await res.json();
    return  quotes[Math.floor(Math.random()*quotes.length)];
}

export { fetchRandomQuote };
