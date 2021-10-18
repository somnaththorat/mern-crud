import { useState, useEffect } from "react";
import {
    Table,
    TableHead,
    TableCell,
    TableRow,
    Button,
    TableBody,
    makeStyles,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        width: "90%",
        margin: "50px 0 0 50px",
    },
    thead: {
        "& > *": {
            fontSize: 20,
            background: "#000000",
            color: "#FFFFFF",
        },
    },
    row: {
        "& > *": {
            fontSize: 18,
        },
    },
});

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    };

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };





    let sr_no = 1;
    // for (let index = 1; index < 11; index++) {
        // console.log(index);


        // var srlength = users.length;
        // console.log("sr length is " +srlength);


        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Sr.No.</TableCell>
                        <TableCell>Id from Database</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow className={classes.row}>
                            <TableCell>{sr_no++}</TableCell>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    style={{ marginRight: 10 }}
                                    component={Link}
                                    to={`/edit/${user._id}`}
                                >
                                    Edit
                                </Button>{" "}
                                {/* change it to user.id to use JSON Server */}
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => deleteUserData(user._id)}
                                >
                                    Delete
                                </Button>{" "}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    // }
};

export default AllUsers;
