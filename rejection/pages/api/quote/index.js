import nc from 'next-connect';

const quotes = [
    'If you want to improve, be content to be thought foolish and stupid. — Epictetus',
    'Misfortune is virtue\'s opportunity. — Seneca',
    'The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius',
    'If you know the why, you can live any how. — Friedrich Nietzsche',
    'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. — Bruce Lee',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill',
    'It always seems impossible until it\'s done. — Nelson Mandela',
    'Energy and persistence conquer all things. — Benjamin Franklin',
    'I hated every minute of training, but said, \'Don\'t quit. Suffer now and live the rest of your life as a champion. — Muhammad Ali',
    'The greatest glory in living lies not in never failing, but in rising every time we fail. — Ralph Waldo Emerson',
    'I am a slow walker, but I never walk back. — Abraham Lincoln',
];

const handler = nc()
    .get((req, res) => {
        res.json({ data: quotes });
    })

export default handler;
