export const fetchBenches = (filters)=> {
  return $.ajax({
      type: 'GET',
      url: '/api/benches',
			error: (err) => console.log(err),
    });
};
