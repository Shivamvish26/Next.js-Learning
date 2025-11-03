import {Roboto} from 'next/font/google';

const roboto = Roboto({
    weight:["600"],
    subsets: ['latin'],
    display:'swap'
})

export default function FontDisplayWebPage() {
    return (
        <div>
            <h1>Font Display Web Page</h1>
            <p className={roboto.className}>qdeejiebfiubeuf</p>
        </div>
    );
}