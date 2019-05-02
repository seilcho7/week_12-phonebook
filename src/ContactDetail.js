import React from 'react';

// const contactObject = {
//     'Jon Snow': '404-111-1123',
//     'Daenerys Targaryen': '404-332-3951',
//     'Arya Stark': '770-331-1123',
//     'Tyrion Lannister': '678-331-2315',
//     'Cersei Lannister': '404-333-1111',
//     'Sansa Stark': '770-854-6772',
//     'Bran Stark': '770-443-1578',
//     'Jaime Lannister': '678-651-4445',
//     'Eddard Stark': '678-000-0091',
//     'Brienne of Tarth': '770-990-3331',
//     'Sandor Clegane': '404-231-6621',
//     'Joffrey Baratheon': '770-560-9375',
//     'Petyr Baelish': '404-311-0009',
//     'Tywin Lannister': '404-018-3717'
// }

function ContactDetail({match, detail}) {
    const phoneNumber = detail[match.params.name];

    return (
        <div>
            <h3>{match.params.name}</h3>
            <h4>{phoneNumber}</h4>
        </div>
    )
}


export default ContactDetail;