const CoursePage = () => {
  return (
    <div className="px-12">
      <div className="grid md:grid-cols-2 grid-cols-2">
        <img
          src="https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2FEfAl9bwzVZk%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=9f36f80c3051494e161b7bf24f6bf4dd"
          alt="course image"
          referrerPolicy="no-referrer"
          className="rounded-md "
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Web developement with Next.js</h3>
          <div>
            <p className="font-bold text-foreground/60">
              Created by Sanket Patil
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">fjfjfj</div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <h4 className="font-bold text-lg">Course Content</h4>
        </div>
        <div>
          <h4 className="font-bold text-lg">Reviews</h4>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
