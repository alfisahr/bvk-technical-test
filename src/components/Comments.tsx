import {
  FormEvent,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import AppContext from "../states/appContext";

type CommentsProps = {
  data: {
    author: string;
    author_details?: {};
    content: string;
    created_at: string;
  }[];
  showForm?: boolean;
  num?: number;
  comment?: string | null;
  movieId?: string;
};

const Comments = forwardRef<HTMLDivElement, CommentsProps>(
  ({ data, showForm, num = 2, comment, movieId }: CommentsProps, ref) => {
    const [form, setForm] = useState(showForm);
    const [localComments, setLocalComments] = useState(data);

    useEffect(() => setForm(showForm), [showForm]);

    const { dispatchWatched } = useContext(AppContext);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (textareaRef.current?.value) {
        dispatchWatched({
          type: "ADD_COMMENT",
          payload: {
            comment: textareaRef.current?.value,
            movieId: parseInt(movieId!),
          },
        });
        setLocalComments([
          {
            author: "",
            content: textareaRef.current?.value,
            created_at: "",
          },
          ...localComments,
        ]);
        textareaRef.current.value = "";
        setForm(false);
      }
      console.log(localComments);
    };

    return (
      <div ref={ref}>
        <div className="flex items-center mb-5">
          <h3 className="font-bold mr-5">Comments</h3>
          <button type="button" className="btn btn-sm btn-link">
            {comment ? "Update comment" : "Leave comment"}
          </button>
        </div>
        <div
          className={`border border-solid border-gray-400 rounded-md p-3 mb-3 ${
            form ? "block" : "hidden"
          }`}
        >
          <form onSubmit={handleSubmit}>
            <textarea
              ref={textareaRef}
              cols={30}
              rows={4}
              placeholder="Write your comment"
              className="textarea w-full"
            />
            <button type="submit" className="btn btn-neutral">
              Submit
            </button>
          </form>
        </div>
        <div>
          {localComments
            .filter((item, key) => key < num)
            .map((comment, key) => {
              return (
                <div
                  key={key}
                  className={`border border-solid mb-3 rounded-lg px-3 py-3 ${
                    comment.author == ""
                      ? "bg-yellow-100 border-yellow-200"
                      : "border-gray-300"
                  }`}
                >
                  <h3 className="font-bold mb-3">
                    {comment.author == "" ? "APP_COMMENT" : comment.author}
                  </h3>
                  <div>
                    <ContentShortener content={comment.content} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
);

export default Comments;

function ContentShortener({ content }: { content: string }) {
  const [full, setFull] = useState(false);

  const splited = content.split(" ");
  const short = splited.filter((spl, key) => key < 20).join(" ");
  return (
    <div>
      {full ? content : short}
      <div
        className="inline-block text-blue-700 ml-5 cursor-pointer"
        onClick={() => setFull(!full)}
      >
        {full ? "Show less" : "Show more"}
      </div>
    </div>
  );
}
