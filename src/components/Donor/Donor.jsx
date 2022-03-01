import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  tabsClasses,
  styled,
  TableFooter,
  Pagination,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Crypto,
  Recipt,
  Earn,
  Share,
  Copy,
  Open,
} from "../../assets/icons";
import group from "../../assets/images/group.png";
import fromNow from "../../libraries/FromNow";
import { getRandomDate, getRandomStatus } from "../../utils/extras";
import Method from "../../utils/Method";
import {
  BorderLinearProgress,
  StyledTab,
  StyledTabs,
} from "../../utils/MuiComponents";
import {
  ConfirmPopup,
  CreditCardPopup,
  PaymentPopup,
} from "../../utils/CreditCardPopup";

const beneficiaries = [
  {
    name: "Tesla Motors",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Metaverse",
    image: "https://source.unsplash.com/random/400x400",
  },
  {
    name: "SpaceX",
    image: "https://source.unsplash.com/random/500x500",
  },
  {
    name: "Qasim Rai",
    image: "https://source.unsplash.com/random/600x600",
  },
  {
    name: "Jane Doe",
    image: "https://source.unsplash.com/random/700x700",
  },
  {
    name: "Tesla Motors",
    image: "https://source.unsplash.com/random/250x250",
  },
  {
    name: "Metaverse",
    image: "https://source.unsplash.com/random/290x290",
  },
];

const createData = () => ({
  age: fromNow(getRandomDate()),
  block: Math.random().toString().slice(2, 9),
  method: getRandomStatus(),
  id: Math.random().toString(36).slice(2, 9),
});

const randomData = Array.from({ length: 7 }, createData);

const Beneficiary = ({ name, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <Tab
      disableRipple
      style={{
        opacity: 1,
      }}
      label={
        <div className="w-[86px]">
          <div>
            <img
              src={image}
              className="rounded-full w-16 mb-2 h-16 mx-auto"
              alt=""
            />
          </div>
          <div className="text-sm mb-5 text-roboto capitalize font-semibold">
            {name}
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r py-2 from-primary-light to-primary"
          >
            <span className="text-xs capitalize">View</span>
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle className="font-bold">Beneficiary Details</DialogTitle>
            <DialogContent>
              <div className="flex mb-3 items-center">
                <div>
                  <img
                    src={image}
                    className="rounded-full w-16 h-16 mx-auto"
                    alt=""
                  />
                </div>
                <div className="ml-4 text-roboto font-medium text-black">
                  {name}
                </div>
              </div>
              <div className="text-gray-400 text-[15px]">
                Purpose: Service Provider
              </div>
              <div className="mt-4 text-sm ">Wallet Address:</div>
              <div className="text-sm mt-2 flex">
                <span className="text-primary">
                  0x6b891a1252e7fdead82f963468eed1922cfb310c{" "}
                </span>
                <div className="ml-3">
                  <Copy className="cursor-pointer" />
                </div>
                <div className="ml-3">
                  <Open className="cursor-pointer" />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      }
    />
  );
};

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const Donor = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  return (
    <main className="px-10 pb-5 pt-10">
      <CreditCardPopup
        open={open}
        setCheckoutOpen={setConfirmOpen}
        setOpen={setOpen}
      />
      <ConfirmPopup open={confirmOpen} setOpen={setConfirmOpen} />
      <PaymentPopup
        open={paymentOpen}
        setOpen={setPaymentOpen}
        setCheckoutOpen={setConfirmOpen}
      />
      <h1 className="text-2xl text-gray-500 font-bold">Campaign 1</h1>
      <p
        className="text-gray-500 mb-2 text-xs font-semibold uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        Info & Explainer
      </p>
      <Grid spacing={2} container>
        <Grid item md={7}>
          <Paper className="px-3 py-4 shadow-lg">
            <img src={group} alt="group" className="w-full" />
            <div className="mt-4 flex justify-between">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-gradient-to-r h-11 mr-8 py-2 from-primary-light to-primary"
                  startIcon={<Card />}
                  onClick={() => setOpen(true)}
                >
                  <span className="text-xs capitalize">Donate with Cash</span>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-gradient-to-r h-11 py-2 from-primary-light to-primary"
                  startIcon={<Crypto />}
                  onClick={() => setPaymentOpen(true)}
                >
                  <span className="text-xs capitalize">Donate with Crypto</span>
                </Button>
              </div>
              <div>
                <Link
                  to="donate"
                  className="text-xs underline pr-5 text-primary font-semibold"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="mt-2 flex text-body">
              <div className="mr-3 flex items-center">
                <Recipt className="mr-1 mb-0.5" />{" "}
                <span className="text-roboto">
                  Get Tax Receipts on contributions to Applicable campaigns.
                </span>
              </div>
              <div className="mr-3 flex items-center">
                <Earn className="mr-1 mb-0.5" />{" "}
                <span className="text-roboto">
                  Earn 0.2 $KYNDR DAO tokens for every ₹500 donated
                </span>
              </div>
            </div>
          </Paper>
          <Grid container spacing={2} className="mt-5">
            <Grid item md={4}>
              <div className="mb-4">
                <h1 className="font-semibold text-xl">Top Supporters</h1>
              </div>
              <TableContainer className="py-5" elevation={2} component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="py-0 border-b-0">
                        <div className="flex items-center">
                          <Avatar
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            className="mr-3 w-7 h-7"
                          />
                          <div>
                            <h1 className="text-sm font-semibold text-[#9E9E9E]">
                              John Doe
                            </h1>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="text-primary py-3 font-semibold border-b-0"
                      >
                        USD 1,00,000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="py-0 border-b-0">
                        <div className="flex items-center">
                          <Avatar
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            className="mr-3 w-7 h-7"
                          />
                          <div>
                            <h1 className="text-sm font-semibold text-[#9E9E9E]">
                              John Doe
                            </h1>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="text-primary py-3 font-semibold border-b-0"
                      >
                        USD 1,00,000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="py-0 border-b-0">
                        <div className="flex items-center">
                          <Avatar
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            className="mr-3 w-7 h-7"
                          />
                          <div>
                            <h1 className="text-sm font-semibold text-[#9E9E9E]">
                              John Doe
                            </h1>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="text-primary py-3 font-semibold border-b-0"
                      >
                        USD 1,00,000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="py-0 border-b-0">
                        <div className="flex items-center">
                          <Avatar
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            className="mr-3 w-7 h-7"
                          />
                          <div>
                            <h1 className="text-sm font-semibold text-[#9E9E9E]">
                              John Doe
                            </h1>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="text-primary py-3 font-semibold border-b-0"
                      >
                        USD 1,00,000
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={8}>
              <div className="mb-4">
                <h1 className="font-semibold text-xl">Fund Beneficiaries</h1>
              </div>
              <Paper className="p-5" elevation={2}>
                <Tabs
                  variant="scrollable"
                  scrollButtons
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      color: "primary.main",
                      "&.Mui-disabled": { display: "none" },
                    },
                  }}
                  defaultValue={0}
                >
                  {beneficiaries.map((item, index) => (
                    <Beneficiary key={index} {...item} />
                  ))}
                </Tabs>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <Paper className="p-5">
            <div className="text-xl font-bold">
              Help Raise funds for this cause
            </div>
            <div className="text-xs mb-2 mt-1">Cause ID: 54321</div>
            <div className="flex mb-3">
              <div className="text-primary text-xs">Create by: Qasim Rai</div>
              <div className="text-primary text-xs ml-4">
                Create for: People
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold text-roboto">
                  $ 3,34,76,278
                </div>
                <div className="text-xs">rised of $ 5,00,00,000 goal</div>

                <div className="mt-4 w-52">
                  <BorderLinearProgress variant="determinate" value={50} />
                </div>
              </div>
              <div>
                <Button
                  variant="outlined"
                  className="border-gray-100 py-2 rounded-lg shadow-sm hover:border-gray-200"
                  color="secondary"
                  startIcon={<Share className="mr-1" />}
                >
                  <div className="text-xs capitalize text-roboto">
                    Share this Foundraiser
                  </div>
                </Button>
              </div>
            </div>
            <div className="mt-4 text-sm flex">
              Wallet:{" "}
              <span className="text-primary">
                0x6b891a1252e7fdead82f963468eed1922cfb310c{" "}
              </span>
              <div className="ml-3">
                <Copy className="cursor-pointer" />
              </div>
              <div className="ml-3">
                <Open className="cursor-pointer" />
              </div>
            </div>
            <Divider className="mt-3" />
            <StyledTabs value={value} onChange={handleChange} defaultValue={1}>
              <StyledTab label="About" {...a11yProps(0)} />
              <StyledTab label="Updates" {...a11yProps(1)} />
            </StyledTabs>
            <TabPanel value={value} index={1}>
              <Divider className="mb-3 mt-2" />
              <div className="px-4">
                <div className="flex justify-between mb-3">
                  <div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold">
                        Here’s a quick update
                      </div>

                      <div className="text-xs text-gray-600 mt-2 font-bold">
                        Thank you for your support!
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-6 h-6 bg-primary font-bold text-white text-[11px] flex items-center justify-center">
                      #03
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemAvatar className="min-w-[35px]">
                      <Avatar
                        className="w-7 h-7"
                        alt="Travis Howard"
                        src="https://source.unsplash.com/random/293x293"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        style: { lineHeight: "1" },
                      }}
                      secondaryTypographyProps={{
                        style: { lineHeight: "1" },
                      }}
                      primary={
                        <span className="text-[9px] font-bold">Qasim Rai</span>
                      }
                      secondary={
                        <span className="text-[7px] font-bold">30s ago</span>
                      }
                    />
                  </ListItem>
                </div>
                <div className="mt-4">
                  <p className="text-[13px] text-gray-500 text-roboto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos ipsa officia et ullam animi eos, aspernatur
                    obcaecati sequi laboriosam vel temporibus id libero qui
                    tempore culpa odio perspiciatis hic nam.
                  </p>
                  <p className="text-[13px] text-gray-500 text-roboto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore nesciunt ullam, sed aperiam et aliquam provident
                    vitae eos delectus dolorem totam est minima qui quibusdam
                    modi, rerum reiciendis? Pariatur, omnis.
                    <span className="underline text-primary">See More</span>
                  </p>
                </div>
                <Divider className="my-4 border-secondary" />
                <div className="flex justify-between">
                  <div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold">
                        Here’s a quick update
                      </div>

                      <div className="text-xs text-gray-600 mt-2 font-bold">
                        Thank you for your support!
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-6 h-6 bg-primary font-bold text-white text-[11px] flex items-center justify-center">
                      #04
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemAvatar className="min-w-[35px]">
                      <Avatar
                        className="w-7 h-7"
                        alt="Travis Howard"
                        src="https://source.unsplash.com/random/293x293"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        style: { lineHeight: "1" },
                      }}
                      secondaryTypographyProps={{
                        style: { lineHeight: "1" },
                      }}
                      primary={
                        <span className="text-[9px] font-bold">Qasim Rai</span>
                      }
                      secondary={
                        <span className="text-[7px] font-bold">30s ago</span>
                      }
                    />
                  </ListItem>
                </div>
                <div className="mt-4">
                  <p className="text-[13px] text-gray-500 text-roboto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos ipsa officia et ullam animi eos, aspernatur
                    obcaecati sequi laboriosam vel temporibus id libero qui
                    tempore culpa odio perspiciatis hic nam.
                  </p>
                  <p className="text-[13px] text-gray-500 text-roboto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore nesciunt ullam, sed aperiam et aliquam provident
                    vitae eos delectus dolorem totam est minima qui quibusdam
                    modi, rerum reiciendis? Pariatur, omnis.{" "}
                    <span className="underline text-primary">See More</span>
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={0}>
              Coming soon
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>

      <div className="text-xs font-medium text-roboto uppercase mt-4 text-[#4C4C66]">
        Transaction Data
      </div>
      <TransactionTable />
    </main>
  );
};

/**
 * TABLE
 * 1. Txn Hash
 * 2. Method
 * 3. Block
 * 4. Age
 * 5. From
 * 6. To
 * 7. Value
 * 8. [Txn Fee]
 */

/**
 * TABS
 * 1. Transfers
 * 2. Holders
 * 3. Info
 * 4. Contacts
 * 5. Analytics
 * 6. Comments
 */

const a11yTabProps = (index) => ({
  id: `h-tab-${index}`,
  "aria-controls": `h-tabpanel-${index}`,
});

const TransactionTable = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper className="p-5 mt-3">
      <StyledTabs
        className="mb-3"
        value={value}
        onChange={(e, v) => setValue(v)}
      >
        <StyledTab label="Transfers" {...a11yTabProps(0)} />
        <StyledTab label="Holders" {...a11yTabProps(1)} />
        <StyledTab label="Info" {...a11yTabProps(2)} />
        <StyledTab label="Contacts" {...a11yTabProps(3)} />
        <StyledTab label="Analytics" {...a11yTabProps(4)} />
        <StyledTab label="Comments" {...a11yTabProps(5)} />
      </StyledTabs>
      <TableContainer className="rounded-md">
        <Table>
          <TableHead className="bg-slate-100">
            <TableRow>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Txn Hash
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Method
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Block
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Age
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                From
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                To
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Value
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                [Txn Fee]
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {randomData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-sm font-medium py-3 text-roboto text-primary">
                  c4C222B8546C3be595f6894m...
                </TableCell>
                <TableCell className="text-sm py-3">
                  <Method method={row.method} />
                </TableCell>
                <TableCell className="text-sm py-3 font-medium text-roboto text-primary">
                  {row.block}
                </TableCell>
                <TableCell className="font-medium py-3 text-roboto text-xs ">
                  {row.age}
                </TableCell>
                <TableCell className="text-sm py-3">
                  c4C222B8546C3be595f6894m
                </TableCell>
                <TableCell className="text-sm font-medium py-3 text-roboto text-primary">
                  <div
                    style={{
                      letterSpacing: "0.4px",
                    }}
                    className={`px-1 bg-orange-100 text-orange-600 text-xs w-auto inline-block text-center text-roboto font-medium rounded-md mr-4 py-1`}
                  >
                    Out
                  </div>
                  c4C222B8546C3be595f6894m
                </TableCell>
                <TableCell className="text-sm py-3">0 MATIC</TableCell>
                <TableCell className="text-sm py-3">0.000321</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-sm text-center py-3"
                align="right"
              >
                <div className="flex justify-end">
                  <Pagination count={10} color="primary" />
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Donor;
