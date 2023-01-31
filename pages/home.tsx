import Head from 'next/head'
import { Progress, Grid, red, Card, Col, Text, Row } from "@nextui-org/react";



export default function Home() {
    return (
        <div className="header">
            <h1 className="head">Welcome to your Wealthy Future with FinCent!</h1>
            <h2 className="yuh">Wealth Education Progress</h2>
            {/* <Grid.Container xs={12} sm={6} gap={2}>
                <Grid>
                    <Progress value={30} color="success" striped status="success" />
                </Grid>
            </Grid.Container> */}
            <Progress value={30} color="success" striped status="success" className="progress"/>
            <h2 className="yuh">300 / 1000</h2>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={4}>
                    <Card isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h2 color="white">
                                    Investment
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Which-Type-of-Investment-Has-the-Highest-Risk.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h2 color="white">
                                    Credit
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://live.staticflickr.com/7139/8153457611_aa23094684_b.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h2 color="white">
                                    Financing
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://live.staticflickr.com/8421/7730189400_708c48f039_b.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h2 color="white">
                                    Identity Theft
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAC0CAMAAAB4+cOfAAABlVBMVEVAv6789+H+RgCTk5N4ennr69//++Q0mo09wrB5eHdmk4wzMzN2e3o3pJZxdHTCwLOPkItYIgBviIOgoZnT0cGWlpWKi43/rm3Jx7ucnJq6urAaGhr28t3///8uLi8fnZLoVR09tqfLZD/w79/t4M//NAAAlooAAACidljt6dX/tHD7ckiy0MTK4tTk4M1TFwD2qWtcW1fgm2ThjFM7rp/Ic076RgBUGgBLAABMEwCrqqVyV0LvnWDghEUUFRsiIyahu8Ugp+NOTUiWlHmucFBXj3xzp4+GgGa4fVjSXTJcsZzVZz3xTBGhjW1+oYfmWil3hW/AdlCUel5cjXqWeVxZjnrwdk5VzL7JYj5Uqp2DuKx/1ciN08X0g2P6WyXd7+RGlIqjiXTJuaNjMhe+rJbe0bhQCACAWT+JaFJuRTCvbj/HgU7Nh1SHTSg7AAB3OxaploL+zJ1bSjxbRy/Y3+L+2LEAABqNZ0l3NQDcs5L23L7rtInmn3L5ol1gYGJERER+xerB4vNjsNWNpa47q92Gt8+qwcgMZJahAAALGklEQVR4nO2di18TRx7AieIkGAlEQkKSTdKcYtg9XQJBCe9gr61e9Wy9h4dtr4BVqIBWDuqdrXrno3/3zSMk84TkstldsvP9YCTZhzvf/Oa3Mzuzbl+f68yEC9fP0Hwa4dYYDEMKf2BW+oRfqQeBpb5Dl/lGkV1eRF7CnzFexj8PgJhiuPAFU+pbbKGxl8JtZpXrAfCCqgpX7D9SxY7MYC9fMSucKar31kvwFeXLCLMwzFe28buBCBgUFIUJpuB/ahQ8Isu894LhpQ9FRYEJieY5h2Te9eBlXkKRSyLNukIy75cBzLyEQa7wN8jH0sw7HpDMS4DlZ0r/deToY8gnQcy8dWD+vc+YwadsknmZxByINi8NrEz36PLfjjQy7w1GTHAyLwFK+DNTY+ApmwTM3wObeQl8Z/IOybysrsC0eWmgBKbS3C3ggGEzr9D1DgB8Z/IG9vIXJl6C0+al4TuT1wt8EAWozcvAdyb/yl/DCl7mxaDOJNNbvFdgMy9/CSs48J3Jr5imTcDavDR8Z5Jt2gUz8xL4zqTOvEfwnUmdeesU+ZZLE68PzWP4zmSDILZ5afjOpM68Rwgjkzrz1uH7AZivtRdxZPJMkNu8FBFhZDKYVxsEisIQvs68mCK+AD6uMy8PvgS+9rffN/nugdfH5AuwmKvnaK7piOnTYpRoMQq0GBVFLUaOFqMAi7lMc83rQ/IHSMyV2+NN7uiAweCm7++olm/QZn6o0GIUaDEKtBgFWowCLUaBFqNAi1GgxSjQYhRoMQq0GAVajAItRkGRnyivxSDInThajEA4PKPFyAiHi4NrDx8yOeabb7/x+rC8Jxzui3x76fvvKDH/+F5fDkdiBgcfnrtGRcz4nQeXTrEYh448glLvw0vXvphocPfTB6c4YmYGHaIu5kqTQmHw0tVCh7ud8WJOVqQ4GHaUh+d4rl7pfK8zrouZ6fygWSRinNjtYMTVChk58rJ+/uIFR4jNC2LGYk7s+OKaU6mwFYp1LxcHBgb6HUEqxokdwyNcd88MyS/rF4iVmBPIxHQOcXPRNTEkXrCXWGwkM+QACUGM3flOM8MxYsalmJmp1yNcBQzgCIYg5pITu7WxmoE1V8yQ//lmHXsZAyFnkIhxYrcgNILMXHDDSz3FoICJzTvlpVtioJp+90IGi7mAAsaZY0d0T0wChszAeffEOBsw3RODQ8al9NsQ41iG6aqYYffFJE6FGJh+tRgJWowCLUaBFqNAi1GgxSjQYhRoMQq0GAVajALPxZiGCX/EF9OGfxmSRUZAxCQM2zYaLyZ5MRO2TV4MGymyTbjcrq9Eb93LYqg35NfGBUbm48a7BH34PSzGEA5pY3tra2t7Y9ME0lzEbmDwOOTFczFgiH4DVZiPH2/efzI7OVetbm1KzBgJ8bNu4LWYkN08lNDm9qP4ZLX6ZDKOmaxumSBE1SKMGQwxoBEA4IdHjyZn4wyTs5swiO4zZmznTvZ+FtPIpWDjp8cbk3Ge6o8bG89+kG3Q62IaNQM8nhS9xOOz8NMnpmyDHhfTuDJubm3LxCCe0CEjixhhKLEHxDQCwACGwkt8dgtINmiWwUzwdH7W9lwMFQAAhczkHAIn4dmjX2d/pLawQxwgkRQ4a3YaNL4Ss1mNx5/uTk/v7jyNz83Fnz7d2d3d2ZtjxYhVafSsSMeDep6LoWsG2K7uWCmEZe3swBf8297s3MZxVcmQeDmbPvVimJbv5rPFlMDiXPXxcRED5kUvycypF8MEwOVnopdUKh43VBtgDNHMfIdafCCGCQC7KvFiPd+W9yGahUDXb2iMzs/XvhIDzCpJMA0nOMvs/XSCmG7guRimZpSrlmUt7j2PP7WQkPjzvUX4wd6tkGqD7uG5GGpOCHiRqu7vLyws3NxfmLCsiYX9Kfhmf39v50VzpcBcdqACAIqZvDVtWdPJTWsLKrH+eVCG7yb2Ki+Obfn2phg6AA5Ts7emU6npnxesl6nUS2v/Z/Ru4vniIbVSUHIMUzOsOIoYa7dsbZdT21Z510IREy/T6wRFDFMzwER5Ad959PJlynpJWJj+F3PEQalKzIQ8cPg6VYaQc3UZk1r8N3PxXJJ8W2q1tNm08VwMGwBmBXcCIGX4p4I7CEuv2FXEQmTSLZA5ZWLYAADTi8gL/KlUkBsYO5Vp9ruW9JWSsm6k0H1qr8PtNzGvlsooYMqoRkE/8M3SIVsgIflKe9cy2spOnovhjhYcLpVRdSJpBqpZesF90a1ddpDR1mU9z8UMceUGryqVcqoeNZXFyituuZh8wVBrVYn/l3wuRvgaQeiXpXqiqSz9KvaTxe8dJDIt0ObkE8/FSM++vyxVEEt8uCg2EEcJJLSlxZdigD2W+xV5eX2YGxKbH0EZieRPMsAeLr3J5VCieZHLlfIZvjIFpeXLpkRg96+USm9zucvwxJTLHZSypeiIcVLLtyfF0LkU2APL+Xw2m8/lcq9ew5dMCb5ZyY/QFcqxGTA+F9MMAGAMr+Sj0Ww2WzqAUtCfeSgmG42uRDPN5BmQiKGmgWSgACihLuY/q//N5fqRGCgrvzLVyLmBS76wFkEvsCJBMfO5j6urqwe5KfQuiz9fORopkiRfIHnX1vlZsq7XYhpTzaZQuCABSEz6oPZh9V3t4C3yQhZEl0fwmobYUGPHlUbJHs0ReQM4jSIO2GnJJr4SU8+lYKRefKLmTa32bvVjrbZCwoWwYlMb0EXgetdJfIlH3TWAOzC5TkRSvE3TczH1HPO2KQDWpmgNRszH2vtStuELihnG2wkRI3Qi0fUFW9l/SiZCYIxfKl6S8FoMwGEAEk0BqC7la7gqva/n3rqwKN5OTL4yMXxMUGLgv5jwvxiSfKmahNNttlZbhWKSJSrHwCyD1xWSL/z+8ZSYs0eTY9DcGFi/FOBh7RHuQ9G252Jw7QZTzbjAp6X38Kz04bcLWEwzllD6lSRf2LmiIQ1lkBiTUq+67FLJNCPPxeAAMKhU0hCz+tsbJmCi+QG0oaTlK+9GH9vLPrHn7bkYHDFUisEhU0oiMbW3WTrHRPNv8bqSUnQBz8XgZsU8JQb3CWLvoJiPeSZgYJJB4RWUATdUTjCwkm+yspwtvfmAxGSXs8vUgvzyELrZIBhiwJCZSJixKZqbN2/G3n149+Ej/OUms2TYHDODUpXIUQgZksuNgKzjjhMfifEhPSEGCLdztYcfe9dOYKZVrdxWkUzy7AExIC3tE7WDZDCuB8S0PER7DD7sRDqAFiNHdvdJm0gmQvSAGHhSEu5XahPJaakXxLQ2dn0M0l32hJguoMUo0GIUaDEKtBgFWowCLUaBD8TIGhUnNDla+bDDloznYoA9Mkoxj4e+QCI9KoXMe+cWp8k2Y4ptTiYt+R+GPRdj8KOlaNxIGEI9gtw2zA9Mo4FEcTy6DZKSq61eXwzny4OOUXYn9RFomwxfriG4jWLaR2v4r3cN+OBIJiQlpwAyMWPHyzyNYkKhNGOGXGU0k4p6QWKeW5wcNXD9+v/rUlIcxfNejDHGTGwnH5pD8nnv9VkJ7GIyjA/MVibOy/HjoL5ifP2E02oATtd+xUUxM6dMjGvPJSgeiWnvxiGPcPGBDfj5SuhZK8OnQYzh3rNPcMjgp+W4NJOjE0AGiXHrcWUw/Z4fOBUhA0z85Cm3HhmJnj2FHzyVbvf2cHcBwHb1WWV96MyEQybWP+bQs8q6QcjMkIe4ufqM0SJ+iBtUM+xbkuS5fy49j6vJeaeeEtlVBlz30hdZQ0/Q9DsXi+4/BjkSmVk/72/WPNBSd+NzvNGi0Wg0Go2j/A84/pYhr8gQLgAAAABJRU5ErkJggg=="
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h2 color="white">
                                    Budget
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIm2doEzhdNbBUTW7PTpluyVKnlcyqeb01nw&usqp=CAU"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h2 color="white">
                                    Insurance
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="data:image/jpeg;base64,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"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    )
}