import Work from "./Work";
import Hobbies from "./Hobbies";
import Conversation from "./Conversation";
function init(config) {
  this.Configuration = config;
}
const Jared = {
  init,
  Configuration: {
    mood: "stoked",
    energy: 100
  },
  Work,
  Hobbies,
  Conversation
};

export default Jared;
