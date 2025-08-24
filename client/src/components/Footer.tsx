const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <div className="text-white text-sm w-full text-center pt-14 mb-3">
        Copyright &copy; <span className="text-neon">{ year }</span> | Team Bhai ki Pull Request
    </div>
  )
}

export default Footer