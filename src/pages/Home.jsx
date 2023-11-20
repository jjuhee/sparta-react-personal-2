import Header from 'components/Header';
import LetterForm from 'components/LetterForm';
import Letters from 'components/Letters';
import React, { useState } from 'react'

function Home({ letters, setLetters }) {
    const memberData = [
        { name: "Heejun", color: "yellow" },
        { name: "Woohyuck", color: "blue" },
        { name: "Tony", color: "red" },
        { name: "Kangta", color: "green" },
        { name: "Jaewon", color: "orange" }];
    const [memberSelect, setMemberSelect] = useState("Heejun");

    return (
        <>
            <Header memberSelect={memberSelect} setMemberSelect={setMemberSelect} memberData={memberData} />
            <main>
                <LetterForm letters={letters} setLetters={setLetters} memberData={memberData} />
                <Letters letters={letters} memberSelect={memberSelect} />
            </main>
        </>
    );
}

export default Home;