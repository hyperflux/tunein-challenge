import React from "react";

/* 
    Spacer?? Isn't that super old school? 
    Yes, but it's on its way back. 
    To me, it makes total sense to avoid adding a margin to a component 
    in the effort to to add space outside of it if the space will only be needed 
    in some cases. For example, I don't want to add top and bottom margins 
    to the <StationPlayer> component here because what is outside of it 
    (around it) has nothing to do with the component itself.
    I wouldn't use <Spacer> in every case, but in a lot of places, it just feels right. 
*/

export const Spacer = ({ h }) => <div style={{ height: h }}></div>;
