package com.studio.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.studio.dao.IUsuarioDao;
import com.studio.model.User;

@Component
public class IUsuariopImpl implements IUsuarioDao {

	private static final Logger logger = Logger.getLogger(IUsuariopImpl.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		return this.jdbcTemplate;
	}

	@Override
	public User getUsuarioByUserAndPassword(String userName, String password) {
		System.out.println("recuperado>>>>>>>>>>>>>>>>>>:");
		String sql = "SELECT * FROM users where username = ? and  password = ? ";
//		sql = "SELECT username,  password  FROM users WHERE username ='" + userName + "'  and  password = '" + password
//				+ "'";

//		sql = "SELECT username  FROM users WHERE username = ?";

//		System.out.println(sql);
		User user = null;
//		
//		 findTotalCustomer();
//		 
		 
		 
		user = getUser(userName);
			user = this.getJdbcTemplate().queryForObject(sql,   new Object[] { userName, password },new RowMapper<User>() {
				public User mapRow(ResultSet rs, int rowNum) throws SQLException {
					
					System.out.println("recuperado>>>>>>>>>>>>>>>>>>2222:" );
					User user = new User();
					user.setUsername(rs.getString("username"));
					user.setPassword(rs.getString("password"));
					System.out.println("recuperado:" + user.toString());
					return user;
				}
			});

		 
		System.out.println("recuperado:" + user.toString());
		return user;
	}

	public String findByName(String userName) {

		String sql = "SELECT username FROM users where username = ?";

		String name = (String) getJdbcTemplate().queryForObject(sql, new Object[] { userName }, String.class);

		return name;

	}

	public User getUser(String username) {

		String sql = " select  * from users";

		try {
			User user = getJdbcTemplate().queryForObject(sql, new RowMapper<User>() {
				public User mapRow(ResultSet rs, int rowNum) throws SQLException {

					User user = new User();
					user.setUsername(rs.getString("username"));

					return user;
				}
			});

			System.out.println("u----" + user);
			return user;

		} catch (EmptyResultDataAccessException e) {
			System.out.println("error");
			e.printStackTrace();
			return null;
		}
	}

	public int findTotalCustomer() {

		String sql = "SELECT COUNT(*) FROM WEBSTUDIO.users";

		boolean result = false;

		int count = getJdbcTemplate().queryForObject(sql, Integer.class);

		if (count > 0) {
			result = true;
		}
		System.out.println("total:" + count);

		return count;
	}

}
