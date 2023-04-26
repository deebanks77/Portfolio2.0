import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  //   const postUrl = process.env.REACT_APP_MAILCHIMP_URI;
  const postUrl =
    "https://gmail.us21.list-manage.com/subscribe/post?u=f08011dcc27f9d5c199f2981a&id=a20c76df4e";

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onSubmitted={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
