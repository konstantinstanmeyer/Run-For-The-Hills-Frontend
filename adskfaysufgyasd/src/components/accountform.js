import React, { useState } from 'react';

// actually a redundatn file I think!! Will probs delete soon!!

export default function accountForm({ restTYPE }) {

    return(
        <div>
            <div> howdy from edit account {restTYPE} </div>
            <form onSubmit={handleSubmitCreate}>
                <input value={emailCreate} onChange={e => setEmailCreate(e.target.value)} type="text" placeholder="email"></input>
                <input  value={passwordCreate} onChange={e => setPasswordCreate(e.target.value)} type="password" placeholder="password"></input>
            <button type="submit">submit</button>
        </form>
        </div>
    )
}