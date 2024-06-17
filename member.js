function skillsMember()
{
	var skills = document.getElementById('skills');
	var member = document.getElementById('member');
	if (skills.style.display == 'block')
	{
		skills.style.display = 'none';
		member.style.display = 'block';
	}
	else
	{
		skills.style.display = 'block';
		member.style.display = 'none';
	}
}
