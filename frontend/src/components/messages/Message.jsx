import React from "react";

function Message() {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image-avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-bubble text-white ">Hi! What's up</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          14:13
        </div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image-avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-bubble text-white ">Hi! What's up</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          14:13
        </div>
      </div>
    </>
  );
}

export default Message;
